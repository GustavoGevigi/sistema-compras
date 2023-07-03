import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const app = firebase.initializeApp ({
  apiKey: "AIzaSyA30HoQNjqTIkFJnP__QNpHw8QlMdc52Fg",
  authDomain: "at---react.firebaseapp.com",
  projectId: "at---react",
  storageBucket: "at---react.appspot.com",
  messagingSenderId: "792541841993",
  appId: "1:792541841993:web:91b004f4e73ecf908e4d98"
});

// Initialize Firebase
const db = firebase.firestore(app);
const auth = getAuth(app);

export { app, auth, db };