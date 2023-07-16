// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAN-oosySIC9HJHnk2RsqPDCzmsPF8WS8",
  authDomain: "fruitsalads-aff68.firebaseapp.com",
  projectId: "fruitsalads-aff68",
  storageBucket: "fruitsalads-aff68.appspot.com",
  messagingSenderId: "131300636440",
  appId: "1:131300636440:web:cd2f03edd3ebda0f27506d",
  measurementId: "G-40M3GRXP0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)