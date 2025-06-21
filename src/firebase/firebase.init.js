// do not share firebase config online

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNbPKBD91PixiO21CNepmBPYG1gUrGLRc",
  authDomain: "fir-auth-aa218.firebaseapp.com",
  projectId: "fir-auth-aa218",
  storageBucket: "fir-auth-aa218.firebasestorage.app",
  messagingSenderId: "815191761095",
  appId: "1:815191761095:web:160da4f02332b482599ee2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)