// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-1NI9BdS9Renj77Dlr40c-41zTsuMWIU",
  authDomain: "react-airbnb-clon.firebaseapp.com",
  projectId: "react-airbnb-clon",
  storageBucket: "react-airbnb-clon.appspot.com",
  messagingSenderId: "522784066938",
  appId: "1:522784066938:web:bfaa4444c8441804349ac3",
  measurementId: "G-M05T4VW573"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(FirebaseApp);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
