// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1IKinEHW3o7bXIRZtBAr52NqwCW_6J_Q",
  authDomain: "graditest.firebaseapp.com",
  projectId: "graditest",
  storageBucket: "graditest.appspot.com",
  messagingSenderId: "694748399237",
  appId: "1:694748399237:web:f0c8a1e740b44d58b08bec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth:Auth = getAuth();

export {
    app,
    auth
}

