// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCTvuKR1K8Ni4DZIakWMC_x8FATawKbxjQ",
    authDomain: "netflixclone-6fe8b.firebaseapp.com",
    databaseURL: "https://netflixclone-6fe8b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "netflixclone-6fe8b",
    storageBucket: "netflixclone-6fe8b.appspot.com",
    messagingSenderId: "566389645126",
    appId: "1:566389645126:web:26f2f3b6b1c5d2b0714f47",
    measurementId: "G-3YVX4S18TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const googleAuthProvider = GoogleAuthProvider()
export default app;
