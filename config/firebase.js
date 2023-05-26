// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1VdM4asULsK4Pzg7qvWfgEBEQeITYubk",
  authDomain: "lendingclub-69b09.firebaseapp.com",
  projectId: "lendingclub-69b09",
  storageBucket: "lendingclub-69b09.appspot.com",
  messagingSenderId: "975925563830",
  appId: "1:975925563830:web:b78f3f59215a093da7b117",
  measurementId: "G-MK7VVX60NY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)