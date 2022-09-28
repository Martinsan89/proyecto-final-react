import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6HgfqqZfqAI0OLWcbi_l0nssswGbuaE0",
  authDomain: "coderhouse-ecommerce-89.firebaseapp.com",
  projectId: "coderhouse-ecommerce-89",
  storageBucket: "coderhouse-ecommerce-89.appspot.com",
  messagingSenderId: "620241190193",
  appId: "1:620241190193:web:98914f4a32b2bfe9d28410"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
