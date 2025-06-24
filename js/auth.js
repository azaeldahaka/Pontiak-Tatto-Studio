// auth.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { guardarDatosTatuador } from './firebase-firestore.js';
import { auth } from './firebaseConfig.js';  // 👈 ya viene inicializado, no lo redefinís

export async function registrar(email, password, datosExtra) {
  const credenciales = await createUserWithEmailAndPassword(auth, email, password);
  const uid = credenciales.user.uid;

  await guardarDatosTatuador(uid, datosExtra);
  return credenciales.user;
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}
