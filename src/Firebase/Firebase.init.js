// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMsFjVnjzMzi2cAkTXjj9FJZKSviFTSYM",
    authDomain: "electro-pro-d7ed3.firebaseapp.com",
    projectId: "electro-pro-d7ed3",
    storageBucket: "electro-pro-d7ed3.appspot.com",
    messagingSenderId: "606861630381",
    appId: "1:606861630381:web:8ae4637d47afcdefb49f24"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; 