// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6SB34fFc6E7iVsIsJUnByNarHpKFNjTw",
  authDomain: "sekure-krypto-6085f.firebaseapp.com",
  projectId: "sekure-krypto-6085f",
  storageBucket: "sekure-krypto-6085f.appspot.com",
  messagingSenderId: "963436761506",
  appId: "1:963436761506:web:3f5beb31b660ab225ea2fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app