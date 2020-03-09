/* eslint-disable no-console */
const functions = require('firebase-functions');
const { Storage } = require('@google-cloud/storage');
const os = require('os');
const path = require('path');
const spawn = require('child-process-promise').spawn;

// Creates a client
const storage = new Storage({
  projectId: 'nrichops',
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
  if (req.method !== 'POST') {
    return res.status(500).json({
      message: 'Not allowed'
    })
  }
  res.status(200).json({
    message: 'It worked!'
  })
});
