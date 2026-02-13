import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjxh6_llKEfwmX_k8kA0tIL48qHcIk1YE",
  authDomain: "philisa-energy-sa.firebaseapp.com",
  projectId: "philisa-energy-sa",
  storageBucket: "philisa-energy-sa.firebasestorage.app",
  messagingSenderId: "935846785290",
  appId: "1:935846785290:web:c7af5c23767780823b8af3",
  measurementId: "G-CMGWX82RCN"
};

// Singleton pattern to prevent multiple initializations
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };