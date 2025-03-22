// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmBtQDXoqTNrYb_FMv5ABjT32iY5jl2Qs",
  authDomain: "digimart-b1a9d.firebaseapp.com",
  projectId: "digimart-b1a9d",
  storageBucket: "digimart-b1a9d.firebasestorage.app",
  messagingSenderId: "822790371323",
  appId: "1:822790371323:web:409dcb9a1803cd8e4f7d5e",
  measurementId: "G-K23K677PNW"
};

// Initialize Firebase
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
     
export const auth=getAuth(app);
export const database = getDatabase(app);
