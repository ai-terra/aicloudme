/* eslint-disable no-console */
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize(event => {
  // console.log(event);
  const object = event.metadata;
  const bucket = object.bucket;
  const contentType = object.contentType;
  const filePath = object.name;
  console.log('File uploaded, function execution started');
  return;
});
