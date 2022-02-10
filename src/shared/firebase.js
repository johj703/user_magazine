import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA7kYUKMo9MNcVt8P5h8zLAXomKPR09ldU",
    authDomain: "image-community-86bee.firebaseapp.com",
    projectId: "image-community-86bee",
    storageBucket: "image-community-86bee.appspot.com",
    messagingSenderId: "993658389772",
    appId: "1:993658389772:web:f21ccb32fa48789daff529",
    measurementId: "G-PYR6NEJNC6"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export{auth};