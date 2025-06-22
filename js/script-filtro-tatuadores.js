
const buttons = document.querySelectorAll('.filter-btn');
const trabajos = document.querySelectorAll('.trabajo');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;
      trabajos.forEach(trabajo => {
        if (filter === 'todos' || trabajo.dataset.artista === filter) {
          trabajo.style.display = 'block';
        } else {
          trabajo.style.display = 'none';
        }
      });
    });
});
