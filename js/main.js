// main.js
import { inicializarCalendario } from './calendario-turnos.js';
import { inicializarFiltros } from './script-filtro-tatuadores.js';
import { inicializarAuthEventos } from './auth-events.js';

document.addEventListener('DOMContentLoaded', () => {
  try {
    inicializarCalendario();
    inicializarFiltros();
    inicializarAuthEventos();
  } catch (error) {
    console.error('❌ Error en la inicialización de módulos:', error);
  }
});
