import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANdjndOuLBoIYrxEUrd37cAdBssA_3nE0",
  authDomain: "lazyfetch.firebaseapp.com",
  projectId: "lazyfetch",
  storageBucket: "lazyfetch.firebasestorage.app",
  messagingSenderId: "579439349693",
  appId: "1:579439349693:web:1e5032b61048a7ee8b8cd4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };