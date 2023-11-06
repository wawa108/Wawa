// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0u7-lhC5FAVKtn5_SO6cuda2Iterl39Q",
  authDomain: "wawa-3d8a7.firebaseapp.com",
  projectId: "wawa-3d8a7",
  storageBucket: "wawa-3d8a7.appspot.com",
  messagingSenderId: "455118079155",
  appId: "1:455118079155:web:5d8e10f9455b98765edcc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();