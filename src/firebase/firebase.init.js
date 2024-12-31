import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJkJ_5AlhzruQzlG30xw4BovgjHhln77o",
    authDomain: "fire-intro-02.firebaseapp.com",
    projectId: "fire-intro-02",
    storageBucket: "fire-intro-02.firebasestorage.app",
    messagingSenderId: "945466006914",
    appId: "1:945466006914:web:971bd942bd63ee22d3039b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;