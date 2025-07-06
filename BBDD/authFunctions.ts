// src/firebase/authFunctions.ts
import { auth, db } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export async function registerUser(username: string, email: string, password: string) {
  try {
    console.log("👉 Registrando usuario...");
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    console.log("✅ Usuario creado con UID:", uid);

    console.log("👉 Escribiendo documento en Firestore...");
    await setDoc(doc(db, "users", uid), {
      username,
      email,
      apiKeys: {}, 
    });
    console.log("✅ Documento en Firestore creado con éxito");

    return uid;
  } catch (error) {
    console.error("❌ Error en registerUser:", error);
    throw error;
  }
}


export async function loginUser(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user.uid;
  } catch (error) {
    throw error;
  }
}

export async function logoutUser() {
  try {
    await signOut(auth);
  } catch (error) {
    throw error;
  }
}
