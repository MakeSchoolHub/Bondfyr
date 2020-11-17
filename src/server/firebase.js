import firebase from "firebase";

import "firebase/auth";
import "firebase/storage";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAKC_WLLN-p3VKcvF-l57uFaq_PPffVISU",
  authDomain: "bondfyr.firebaseapp.com",
  databaseURL: "https://bondfyr.firebaseio.com",
  projectId: "bondfyr",
  storageBucket: "bondfyr.appspot.com",
  messagingSenderId: "811193819853",
  appId: "1:811193819853:web:2fb062b783dcfae7167f84",
  measurementId: "G-H0EWCT3C8N",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
