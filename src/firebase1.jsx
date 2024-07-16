// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAn3MniBKPPYchDLClHNpMRVVwNpbF2sOM",
  authDomain: "expense-tracker-7f15b.firebaseapp.com",
  projectId: "expense-tracker-7f15b",
  storageBucket: "expense-tracker-7f15b.appspot.com",
  messagingSenderId: "1097753419954",
  appId: "1:1097753419954:web:4f24efa90bad444ca829ab",
  measurementId: "G-NKMVVKTX7M"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };