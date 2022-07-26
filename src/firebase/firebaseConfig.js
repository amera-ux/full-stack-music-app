
import Firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBmCBc83XdhKHR-NYsTqbAknCBS_vdt5s8",
    authDomain: "full-stack-music.firebaseapp.com",
    projectId: "full-stack-music",
    storageBucket: "full-stack-music.appspot.com",
    messagingSenderId: "20078067715",
    appId: "1:20078067715:web:0f86510c7dbff2385e4e36"
  };

const firebase = Firebase.initializeApp(firebaseConfig);

export{firebase};
