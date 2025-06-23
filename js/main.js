import { inicializarCalendario } from './calendario-turnos.js';
import { inicializarFiltros } from './script-filtro-tatuadores.js';
import { app, analytics } from './firebaseConfig.js'; // integración de Firebase

document.addEventListener('DOMContentLoaded', () => {
    inicializarCalendario();
    inicializarFiltros();

    console.log("Firebase inicializado correctamente:", app);
});

import { registrar, login, logout } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
  const btnRegistro = document.getElementById('btnRegistro');
  const btnLogin = document.getElementById('btnLogin');
  const btnLogout = document.getElementById('btnLogout');

  btnRegistro?.addEventListener('click', () => {
    const email = document.getElementById('emailRegistro').value;
    const password = document.getElementById('passwordRegistro').value;
    registrar(email, password)
      .then(() => alert('Usuario registrado correctamente'))
      .catch(e => alert('Error al registrar: ' + e.message));
  });

  btnLogin?.addEventListener('click', () => {
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    login(email, password)
      .then(() => alert('Login exitoso'))
      .catch(e => alert('Error al iniciar sesión: ' + e.message));
  });

  btnLogout?.addEventListener('click', () => {
    logout()
      .then(() => alert('Sesión cerrada'))
      .catch(e => alert('Error al cerrar sesión: ' + e.message));
  });
});
