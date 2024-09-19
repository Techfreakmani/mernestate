// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-ec262.firebaseapp.com",
  projectId: "mernestate-ec262",
  storageBucket: "mernestate-ec262.appspot.com",
  messagingSenderId: "706549591609",
  appId: "1:706549591609:web:954ac8b6c069537cfc67e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);