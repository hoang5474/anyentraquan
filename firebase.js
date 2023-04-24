// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVdzE7uXXGMJTKYt7kZgthgrqIQnKnLu0",
  authDomain: "anyentea-171dc.firebaseapp.com",
  projectId: "anyentea-171dc",
  storageBucket: "anyentea-171dc.appspot.com",
  messagingSenderId: "987094203800",
  appId: "1:987094203800:web:2e72c5584f0b47c739ffed",
  measurementId: "G-70WDX39S9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);