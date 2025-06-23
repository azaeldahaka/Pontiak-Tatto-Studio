// js/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgT8v3dlzi6hfkvxppwVwbosNk6usoB0s",
  authDomain: "pontiak-tatto.firebaseapp.com",
  projectId: "pontiak-tatto",
  storageBucket: "pontiak-tatto.appspot.com",
  messagingSenderId: "1084421272820",
  appId: "1:1084421272820:web:9a901b8ab87dfb12d3daa1",
  measurementId: "G-NW18PQ1Q6V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
