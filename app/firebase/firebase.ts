import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDL-q75xDQ07yKHmps_rMktVE3twl7caPY",
    authDomain: "ecofriend-71695.firebaseapp.com",
    projectId: "ecofriend-71695",
    storageBucket: "ecofriend-71695.appspot.com",
    messagingSenderId: "823599320295",
    appId: "1:823599320295:web:1bc80d4d15fb3231222642",
    measurementId: "G-WDZDLZB436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

export function signOut() {
    return auth.signOut();
}

export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}
