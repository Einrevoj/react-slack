import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA0GTpFxhIkuwCHS1RetCggwCUDLuygTiI",
    authDomain: "react-slack-87775.firebaseapp.com",
    projectId: "react-slack-87775",
    storageBucket: "react-slack-87775.appspot.com",
    messagingSenderId: "783203243449",
    appId: "1:783203243449:web:9b3bbbc9f4585ca5ac5268",
    measurementId: "G-0E49PL0KPQ"
  };
  
  // use this to initialize the firebase app
const firebaseapp = firebase.initializeApp(firebaseConfig);

//use this for db, auth & provider
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}