// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5fHif-tSnxLV1GgX5nv5sHFNL23YKaxo",
  authDomain: "house-marketplace-ae9f7.firebaseapp.com",
  projectId: "house-marketplace-ae9f7",
  storageBucket: "house-marketplace-ae9f7.appspot.com",
  messagingSenderId: "257447003878",
  appId: "1:257447003878:web:19b35541888daba74c9d27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();