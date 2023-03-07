import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBc3-fbEZTq634I85Bu5k3tSeweKltZX88",
  authDomain: "e-commerce-contreras.firebaseapp.com",
  projectId: "e-commerce-contreras",
  storageBucket: "e-commerce-contreras.appspot.com",
  messagingSenderId: "312449539814",
  appId: "1:312449539814:web:e2734261827ac400ef2527",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
