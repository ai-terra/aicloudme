/* eslint-disable no-console */
const functions = require('firebase-functions');
const { Storage } = require('@google-cloud/storage');
const os = require('os');
const path = require('path');
const spawn = require('child-process-promise').spawn;
const cors = require('cors')({ origin: true });
const Busboy = require('busboy');
const fs = require('fs');

// Creates a client
const storage = new Storage({
  projectId: 'nrichops',
  keyFilename: 'nrichops-firebase-adminsdk-a653c-71b22d74e1.json'
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize(event => {
  // console.log(event);
  const bucket = event.bucket;
  const contentType = event.contentType;
  const filePath = event.name;
  console.log('File uploaded, function execution started');

  if (path.basename(filePath).startsWith('resized-')) {
    console.log('We already renamed that file!');
    return;
  }

  const destBucket = storage.bucket(bucket);
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
  const metadata = {contentType: contentType};
  return destBucket.file(filePath).download({
    destination: tmpFilePath
  }).then(() => {
    // running 'convert' command from imageMagic on Cloud Function environment
    return spawn('convert', [tmpFilePath, '-resize', '100x100', tmpFilePath]);
  }).then(() => {
      return destBucket.upload(tmpFilePath, {
      destination: 'resized-' + path.basename(filePath),
      metadata: metadata
    })
  });
});

exports.uploadFile = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(500).json({
        message: 'Not allowed'
      })
    }
    // To allow Busboy to know if the response is a form or not to be parsed
    const busboy = new Busboy({ headers: req.headers });
    let uploadData = null;

    // if parsing successfuly the file
    busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename);
      uploadData = { file: filepath, type: mimetype };
      // write the file
      file.pipe(fs.createWriteStream(filepath));
    })

    // When busboy is finishing parsing the entire request
    busboy.on('finish', () => {
      const bucket = storage.bucket('nrichops.appspot.com');
      bucket.upload(uploadData.file, {
        uploadType: 'media',
        metadata: {
          metadata: {
            contentType: uploadData.type
          }
        }
      }).then(() => {
        res.status(200).json({
          message: 'It worked!',
        })
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
    });
    busboy.end(req.rawBody);
  })
});

// cloud function to run on data added to the Firebase realtime database
exports.onDataAdded = functions.database.ref('/message/{id}').onCreate(event => {
  const data = event.params.val();
  const newData = {
    msg: data.msg.toUpperCase()
  };
  return event.data.ref.child('copiedData').set(newData);
});
