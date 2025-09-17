// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDaeH6Sucejn655gMsrzO2fMqbPpbJSUjw",
  authDomain: "netflixclone-942e7.firebaseapp.com",
  projectId: "netflixclone-942e7",
  storageBucket: "netflixclone-942e7.firebasestorage.app",
  messagingSenderId: "277171846581",
  appId: "1:277171846581:web:0004c09d33d6897ca26dfc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);