//when you make a hosting this information should be hidden...To solve this problem we use .env variable to ignore those in git
import { initializeApp } from "firebase/app";
import "firebase/auth"; // Import Firebase authentication module if you're using authentication
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";

//firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

//accept firebase config
const app = initializeApp(firebaseConfig);
//create auth in app
export const auth = getAuth(app);
//create database in firebase
export const db = getFirestore(app);
