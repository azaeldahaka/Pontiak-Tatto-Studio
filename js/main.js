import { inicializarCalendario } from './calendario-turnos.js';
import { inicializarFiltros } from './script-filtro-tatuadores.js';
// import más funcionalidades cuando las tengas

document.addEventListener('DOMContentLoaded', () => {
    inicializarCalendario();
    inicializarFiltros();
});
