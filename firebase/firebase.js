// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh-YGt5uhs7QNxLkSkF4PCH-sua9s1WjQ",
  authDomain: "ariya-99d61.firebaseapp.com",
  databaseURL: "https://ariya-99d61-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ariya-99d61",
  storageBucket: "ariya-99d61.appspot.com",
  messagingSenderId: "446250678274",
  appId: "1:446250678274:web:ef54f5ae5743b9e432cf1b",
  measurementId: "G-HLTY32TVWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export async function databaseTest(db) {
  const citiesCol = collection(db, 'users');
  
  return citiesCol;
}
