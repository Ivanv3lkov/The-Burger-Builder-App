import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA3HZG5yzmSbBbgH3Om7ib3VR6NrPcYVLQ",
    authDomain: "the-burger-bulilder-2020.firebaseapp.com",
    databaseURL: "https://the-burger-bulilder-2020-default-rtdb.firebaseio.com",
    projectId: "the-burger-bulilder-2020",
    storageBucket: "the-burger-bulilder-2020.appspot.com",
    messagingSenderId: "997408078578",
    appId: "1:997408078578:web:40acee1ac59eedeaf92e6b",
    measurementId: "G-4Y354TY9HE"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;