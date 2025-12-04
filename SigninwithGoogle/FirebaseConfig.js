// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAItX4aLPVYw5YX44sGA1VixYBQ-TzhzCw",
  authDomain: "signinwith-e6744.firebaseapp.com",
  projectId: "signinwith-e6744",
  storageBucket: "signinwith-e6744.firebasestorage.app",
  messagingSenderId: "914850098754",
  appId: "1:914850098754:web:97b2867453bb91118ac7db",
  measurementId: "G-RSQKLRDJY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider(app);

export{auth, db, provider};
