// calendario-turnos.js
export function inicializarCalendario() {
  const calendarEl = document.getElementById('calendario');
  if (!calendarEl) return;

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek',
    locale: 'es',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridDay,timeGridWeek'
    },
    selectable: true,
    select: function (info) {
    const fecha = new Date(info.startStr);
    const fechaStr = fecha.toLocaleDateString('es-AR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const horaStr = fecha.toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    // Mostrar datos en el modal
    document.getElementById('fechaTurno').textContent = fechaStr;
    document.getElementById('horaTurno').textContent = horaStr;

    // Guardar los datos para el click posterior
    document.getElementById('btnConfirmarTurno').onclick = () => {
        const mensaje = `Hola! Quiero confirmar mi turno para el ${fechaStr} a las ${horaStr}.`;
        const url = `https://wa.me/5493875693356?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    };

    // Mostrar modal
    const modal = new bootstrap.Modal(document.getElementById('modalTurno'));
    modal.show();
    }
    ,
    events: [
      // Turnos precargados (simulación)
      {
        title: 'Turno reservado',
        start: '2025-06-24T14:00:00',
        end: '2025-06-24T15:00:00'
      }
    ]
  });

  calendar.render();
}
