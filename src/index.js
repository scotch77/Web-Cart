import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA088cttbERGzeJptyUwgzcZy7evV_JhYM",
  authDomain: "cart-84875.firebaseapp.com",
  projectId: "cart-84875",
  storageBucket: "cart-84875.appspot.com",
  messagingSenderId: "402205488484",
  appId: "1:402205488484:web:19eb1e8650c14a236ab671"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


