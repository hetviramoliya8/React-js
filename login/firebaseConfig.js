// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzWfJTIHrvAFCTduppaL1M6pdkpRnlQB8",
  authDomain: "login-740a2.firebaseapp.com",
  projectId: "login-740a2",
  storageBucket: "login-740a2.firebasestorage.app",
  messagingSenderId: "739289750114",
  appId: "1:739289750114:web:17b2f7984bc1194398cf3b",
  measurementId: "G-LSXF5W8TYP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth , db}