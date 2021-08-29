import firebase from "firebase/app";
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

export const getCurrentUser = () => {
  return firebase.auth().currentUser;
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInwithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
