// js/auth.js
import { auth } from './firebaseConfig.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Registrar nuevo usuario
export function registrar(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Iniciar sesión
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Cerrar sesión
export function logout() {
  return signOut(auth);
}
