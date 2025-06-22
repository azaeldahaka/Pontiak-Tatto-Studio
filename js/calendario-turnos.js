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
      const confirmado = confirm(`¿Confirmás el turno para el ${info.startStr}?`);
      if (confirmado) {
        // A futuro: Enviar info a backend o guardar en array
        calendar.addEvent({
          title: 'Turno reservado',
          start: info.startStr,
          end: info.endStr
        });
      }
    },
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
