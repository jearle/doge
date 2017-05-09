import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDYFFwBq3XwJbRZpBMYldRt8Ya_votyB2U",
  authDomain: "life-dojo.firebaseapp.com",
  databaseURL: "https://life-dojo.firebaseio.com",
  projectId: "life-dojo",
  storageBucket: "life-dojo.appspot.com",
  messagingSenderId: "86054739012"
};

const app = firebase.initializeApp(config);

export const getTimestamp = () => firebase
  .database
  .ServerValue
  .TIMESTAMP;

export default firebaseApp;
