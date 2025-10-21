// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-msDTgR9yUEKkszYQFf6ZkdBEDTG16sg",
  authDomain: "world-travelar.firebaseapp.com",
  projectId: "world-travelar",
  storageBucket: "world-travelar.firebasestorage.app",
  messagingSenderId: "384528445907",
  appId: "1:384528445907:web:ced9bb46dcac0d8d9dff26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
