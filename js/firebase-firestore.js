// firebase-firestore.js
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { app } from './firebaseConfig.js';

const db = getFirestore(app);

export async function guardarDatosTatuador(uid, datos) {
  try {
    await setDoc(doc(db, "tatuadores", uid), datos);
    console.log("✅ Datos guardados correctamente");
  } catch (error) {
    console.error("❌ Error guardando los datos:", error);
  }
}

