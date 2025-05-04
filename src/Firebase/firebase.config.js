// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMiG4VSvTdNsELguuAYn_QnG2SZK7I7x0",
  authDomain: "dragon-news-auth-56265.firebaseapp.com",
  projectId: "dragon-news-auth-56265",
  storageBucket: "dragon-news-auth-56265.firebasestorage.app",
  messagingSenderId: "994066145554",
  appId: "1:994066145554:web:603af34dbe8ea59c9613cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;