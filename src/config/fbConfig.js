import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA-cQ06zj9ck2rZDKHeyqU5eVwGQNcZXdk",
    authDomain: "react-firebase-test-e3554.firebaseapp.com",
    databaseURL: "https://react-firebase-test-e3554.firebaseio.com",
    projectId: "react-firebase-test-e3554",
    storageBucket: "react-firebase-test-e3554.appspot.com",
    messagingSenderId: "548227826740"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;