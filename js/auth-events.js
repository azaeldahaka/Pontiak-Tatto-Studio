import { registrar, login, logout } from './auth.js';

export function inicializarAuthEventos() {
  document.getElementById('btn-register')?.addEventListener('click', () => {
    const email = document.getElementById('email-registro').value;
    const password = document.getElementById('pass-registro').value;

    // Datos extra del tatuador
    const datosExtra = {
      nombre: document.getElementById('nombre').value,
      especialidad: document.getElementById('especialidad').value,
      instagram: document.getElementById('instagram').value,
      bio: document.getElementById('bio').value
    };

    registrar(email, password, datosExtra)
      .then(user => alert('✅ Usuario registrado'))
      .catch(err => alert('❌ Error al registrar: ' + err.message));
  });

  // login y logout no cambian
  document.getElementById('btn-login')?.addEventListener('click', () => {
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('pass-login').value;

    login(email, password)
      .then(user => alert('✅ Sesión iniciada'))
      .catch(err => alert('❌ Error al iniciar sesión: ' + err.message));
  });

  document.getElementById('btn-logout')?.addEventListener('click', () => {
    logout()
      .then(() => alert('🔒 Sesión cerrada'))
      .catch(err => alert('❌ Error al cerrar sesión: ' + err.message));
  });
}