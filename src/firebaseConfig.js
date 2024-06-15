// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASNy_TwkadC9NA5czOYPQmMdBzGZRkt8k",
  authDomain: "verify-otp-1ca25.firebaseapp.com",
  projectId: "verify-otp-1ca25",
  storageBucket: "verify-otp-1ca25.appspot.com",
  messagingSenderId: "828363036322",
  appId: "1:828363036322:web:7765ed7bcd7a86f58da9fb",
  measurementId: "G-KG2J7WR1DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
export { app, auth, analytics }; 
