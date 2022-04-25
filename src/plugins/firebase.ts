// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import axios from 'axios'
export const firebase = () =>
{
    
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyBfajKH-rK1b4zEgPrdaYahTXSLbuj4bYA",
    authDomain: "login-firebase-37a95.firebaseapp.com",
    projectId: "login-firebase-37a95",
    storageBucket: "login-firebase-37a95.appspot.com",
    messagingSenderId: "107821675386",
    appId: "1:107821675386:web:7a3d243c6a7dce03b95cc3",
    measurementId: "G-HTKGHRN4BP"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
}
