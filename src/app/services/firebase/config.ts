import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Initialize Firebase app
const firebaseConfig = {
  apiKey: "AIzaSyBw_bbk108eAuZT4gKsjdtAMhK5z-1i6vk",
  authDomain: "placement-portal-7489c.firebaseapp.com",
  projectId: "placement-portal-7489c",
  storageBucket: "placement-portal-7489c.appspot.com",
  messagingSenderId: "950639431837",
  appId: "1:950639431837:web:0b7ea2558da1235e170474",
  measurementId: "G-4L5TKGSR9S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

export { firebaseApp, auth, firestore };
