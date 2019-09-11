import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCS0dnmH7YPvC2An019QkuA5CAdyRu9YrA",
  authDomain: "ecommerce-clothing-fbc5a.firebaseapp.com",
  databaseURL: "https://ecommerce-clothing-fbc5a.firebaseio.com",
  projectId: "ecommerce-clothing-fbc5a",
  storageBucket: "",
  messagingSenderId: "431677788324",
  appId: "1:431677788324:web:c8c156c19f0ea23236d631"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
