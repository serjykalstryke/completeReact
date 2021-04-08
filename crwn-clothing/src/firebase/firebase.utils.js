import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDbeAd_LE8o7HWtkub1YBU1WR_LlxQEVe0",
  authDomain: "crwn-db-82162.firebaseapp.com",
  projectId: "crwn-db-82162",
  storageBucket: "crwn-db-82162.appspot.com",
  messagingSenderId: "364447760963",
  appId: "1:364447760963:web:2b7e68d0e03489c53bcaf6",
  measurementId: "G-Z6R961QHGX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
