import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCpJvmKzeLME_nI7raIjrzuNE7JVdXK4yM",
  authDomain: "fb-clone-5fd95.firebaseapp.com",
  projectId: "fb-clone-5fd95",
  storageBucket: "fb-clone-5fd95.appspot.com",
  messagingSenderId: "1039445950284",
  appId: "1:1039445950284:web:4781853288a7ea134559e9",
};

const app = !firebaseConfig?.apps?.length
  ? initializeApp(firebaseConfig)
  : firebaseConfig.app();

export const authentication = getAuth(app);
export const db = getFirestore();
export const colRef = collection(db, "posts");
