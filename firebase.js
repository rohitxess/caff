// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2k6ALrHb33AnZlE9itdUIHEVHa9TdLuo",
  authDomain: "caffeine-51234.firebaseapp.com",
  projectId: "caffeine-51234",
  storageBucket: "caffeine-51234.firebasestorage.app",
  messagingSenderId: "54080219037",
  appId: "1:54080219037:web:0a375f617a6c6dc5127174",
  measurementId: "G-5GLE9ZP7CK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);