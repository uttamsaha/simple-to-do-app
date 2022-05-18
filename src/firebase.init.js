// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3RTlQViByiMyCCN-oTRRXhCbOQomcKuY",
  authDomain: "simple-to-do-9c0e2.firebaseapp.com",
  projectId: "simple-to-do-9c0e2",
  storageBucket: "simple-to-do-9c0e2.appspot.com",
  messagingSenderId: "83362747356",
  appId: "1:83362747356:web:0ca389c4ff32be0f717519"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;