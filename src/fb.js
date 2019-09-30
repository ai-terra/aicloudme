// from https://vuefire.vuejs.org/vuefire/getting-started.html#installation

import firebase from 'firebase/app'
import 'firebase/firestore'

let fb;

// Get a Firestore instance
export default fb = firebase
  .initializeApp({
    apiKey: 'AIzaSyDLCJnu-VGWAR91i4TPff1FUg1Tl6z2oiI',
    projectId: 'aiplanet',
    storageBucket: 'gs://aiplanet.appspot.com/'
  })
  .firestore();

// Get a reference to the storage service, which is used to create references in your storage bucket
// export let storage = firebase.storage();

// // Export types that exists in Firestore
// // This is not always necessary, but it's used in other examples
// const { TimeStamp, GeoPoint } = firebase.firestore
// export { TimeStamp, GeoPoint }

// // if using Firebase JS SDK < 5.8.0
// db.settings({ timestampsInSnapshots: true })