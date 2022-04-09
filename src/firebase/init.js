// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJYiT_xTAtgl20cXxU6zI_RcprmIdXyq8",
  authDomain: "ema-john-shop-7e4c7.firebaseapp.com",
  projectId: "ema-john-shop-7e4c7",
  storageBucket: "ema-john-shop-7e4c7.appspot.com",
  messagingSenderId: "869945538276",
  appId: "1:869945538276:web:81ad89db4400360e179ef1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
