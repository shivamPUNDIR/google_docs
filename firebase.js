import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCLMTejrdBLCuLqhaiXx7n-vCgHVXIWiMk",
    authDomain: "shivam-s-doc-clone.firebaseapp.com",
    projectId: "shivam-s-doc-clone",
    storageBucket: "shivam-s-doc-clone.appspot.com",
    messagingSenderId: "431132957725",
    appId: "1:431132957725:web:f4e036260a4f83a95f7af4"
};

const app = (!firebase.apps.length )
            ? firebase.initializeApp(firebaseConfig) 
            : firebase.app();

const db=app.firestore();

export {db}
//https://youtu.be/1ZdFJ0701QI?t=5818