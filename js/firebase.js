// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyBgT8v3dlzi6hfkvxppwVwbosNk6usoB0s",
    authDomain: "pontiak-tatto.firebaseapp.com",
    projectId: "pontiak-tatto",
    storageBucket: "pontiak-tatto.firebasestorage.app",
    messagingSenderId: "1084421272820",
    appId: "1:1084421272820:web:9a901b8ab87dfb12d3daa1",
    measurementId: "G-NW18PQ1Q6V"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);