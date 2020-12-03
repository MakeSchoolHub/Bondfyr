import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBOEc9vYHKn-PqVkf6boWYuIJOR3Yn9AyU",
  authDomain: "bondfyr-lounge.firebaseapp.com",
  projectId: "bondfyr-lounge",
  storageBucket: "bondfyr-lounge.appspot.com",
  messagingSenderId: "103069752092",
  appId: "1:103069752092:web:90db2664a0c051d7a7f8d9",
  measurementId: "G-TQCET26J8N",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
