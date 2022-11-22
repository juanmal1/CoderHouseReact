// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxmMlQOwk6dPt-Q0a1VLFWQf463NWsMsU",
  authDomain: "ecommerce-867f5.firebaseapp.com",
  projectId: "ecommerce-867f5",
  storageBucket: "ecommerce-867f5.appspot.com",
  messagingSenderId: "6297414829",
  appId: "1:6297414829:web:3f317cf90473539fcb2a24",
  measurementId: "G-QBPYQ59WVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)