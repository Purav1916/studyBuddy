import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkW7mtluAvJZAhmdkKmGQU7erZFOZTPeo",
  authDomain: "studybuddy-d36ae.firebaseapp.com",
  projectId: "studybuddy-d36ae",
  storageBucket: "studybuddy-d36ae.firebasestorage.app",
  messagingSenderId: "942556234",
  appId: "1:942556234:web:95678b86a96e24ada8d2b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database (this is what we’ll use)
export const db = getFirestore(app);