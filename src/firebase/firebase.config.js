// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0C5vkVWJqCaNuBJO1zIUeBR_uSngfJGM",
  authDomain: "coffee-store-4cddd.firebaseapp.com",
  projectId: "coffee-store-4cddd",
  storageBucket: "coffee-store-4cddd.appspot.com",
  messagingSenderId: "1043306416670",
  appId: "1:1043306416670:web:f08b5f30f10a0eb48b7c0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;