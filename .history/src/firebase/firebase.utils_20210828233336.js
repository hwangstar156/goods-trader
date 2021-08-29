import { firebase } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA4Yej4rm_6kEVYWOdhRIdOiDToCqiwOhI",
  authDomain: "goods-traders.firebaseapp.com",
  projectId: "goods-traders",
  storageBucket: "goods-traders.appspot.com",
  messagingSenderId: "815502497812",
  appId: "1:815502497812:web:bbc98f3f170a2cb26c6f01",
  measurementId: "G-4YKZM07Z92",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
