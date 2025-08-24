// assent/js/home.js
document.addEventListener('DOMContentLoaded', () => {
  const grid     = document.getElementById('photo-grid');
  const modalEl  = document.getElementById('viewNoteModal');
  const textEl   = document.getElementById('viewNoteText');

  if (!grid || !modalEl || !textEl) return;

  // Delegación: sirve para cualquier imagen dentro de .photo-card
  grid.addEventListener('click', (e) => {
    const card = e.target.closest('.photo-card');
    if (!card) return;

    const mensaje = card.getAttribute('data-message') || '💖';
    textEl.textContent = mensaje;
    new bootstrap.Modal(modalEl).show();
  });
});
