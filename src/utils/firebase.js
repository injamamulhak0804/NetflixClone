// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBGurSGE37tUyZaC79SwfEPJlkO4yFW2gI",
    authDomain: "netflix-clone-c6f8d.firebaseapp.com",
    projectId: "netflix-clone-c6f8d",
    storageBucket: "netflix-clone-c6f8d.appspot.com",
    messagingSenderId: "886066214631",
    appId: "1:886066214631:web:9ac023d69ae1f528979442",
    measurementId: "G-89581PDV8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);