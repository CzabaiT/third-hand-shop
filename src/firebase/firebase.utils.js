import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDcAbLIC671WPBCAvmQ1aWU1v1pE9oruNo",
    authDomain: "third-hand-shop.firebaseapp.com",
    databaseURL: "https://third-hand-shop.firebaseio.com",
    projectId: "third-hand-shop",
    storageBucket: "third-hand-shop.appspot.com",
    messagingSenderId: "726128194380",
    appId: "1:726128194380:web:e3b9bbc68464ae55b795e9",
    measurementId: "G-881HC9QDVM"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;