// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCK7PUxQqq9LOjWv_Rm9_fGAas0VDiCPiY",
  authDomain: "fir-4a31c.firebaseapp.com",
  projectId: "fir-4a31c",
  storageBucket: "fir-4a31c.firebasestorage.app",
  messagingSenderId: "963029810708",
  appId: "1:963029810708:web:a6e14-0[e287a5330e42a7101",
  measurementId: "G-20PBQ51WL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);
 const db = getFirestore(app);

 export {auth,db}