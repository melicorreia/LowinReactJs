// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPQqBQDGPvzZk6TWa8MeOzmlNs9BdnisU",
  authDomain: "lowin-reactjs.firebaseapp.com",
  projectId: "lowin-reactjs",
  storageBucket: "lowin-reactjs.firebasestorage.app",
  messagingSenderId: "375181417337",
  appId: "1:375181417337:web:12beebec61f8ac74882da8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);