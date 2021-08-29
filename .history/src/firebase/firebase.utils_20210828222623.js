import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgn5LsHgBbHt4S1w8NZUY92H0N2BYtnTU",
  authDomain: "goods-trader.firebaseapp.com",
  projectId: "goods-trader",
  storageBucket: "goods-trader.appspot.com",
  messagingSenderId: "480606329530",
  appId: "1:480606329530:web:e0298722b7ee31a2650083",
  measurementId: "G-C97J04W4HW",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
