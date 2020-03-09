/* eslint-disable no-console */
const functions = require('firebase-functions');
const { Storage } = require('@google-cloud/storage');
const os = require('os');
const path = require('path');

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

  if (path.basename(filePath).startsWith('renamed-')) {
    console.log('We already renamed that file!');
    return;
  }

  const destBucket = storage.bucket(bucket);
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
  const metadata = {contentType: contentType};
  return destBucket.file(filePath).download({
    destination: tmpFilePath
  }).then(() => {
    return destBucket.upload(tmpFilePath, {
      destination: 'renamed-' + path.basename(filePath),
      metadata: metadata
    })
  });
});
