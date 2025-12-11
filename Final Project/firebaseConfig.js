// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKAvAqhEllkeRs1NTEXqBW9Qsbsi5CAzE",
  authDomain: "reactfinal-1ec55.firebaseapp.com",
  projectId: "reactfinal-1ec55",
  storageBucket: "reactfinal-1ec55.firebasestorage.app",
  messagingSenderId: "1051110486314",
  appId: "1:1051110486314:web:d120166c00bd451f9dee53",
  measurementId: "G-EKM4WF99EN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(app);

export {auth , db , provider}