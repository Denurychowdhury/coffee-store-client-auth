// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUPPUPNeDqW7LvFZN2PJQoz0YvDy0mpus",
  authDomain: "coffee-store-76d8a.firebaseapp.com",
  projectId: "coffee-store-76d8a",
  storageBucket: "coffee-store-76d8a.firebasestorage.app",
  messagingSenderId: "321782196784",
  appId: "1:321782196784:web:97092b4436ff4382ac9bf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);