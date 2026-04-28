// Performer switcher
document.querySelectorAll('.ps-tab:not(.add)').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.ps-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    q.parentElement.classList.toggle('open');
  });
});

// Modal helpers
window.openModal = function(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
};
window.closeModal = function(id) {
  const m = document.getElementById(id);
  if (m) {
    m.classList.remove('show');
    document.body.style.overflow = '';
  }
};
document.querySelectorAll('.modal').forEach(m => {
  m.addEventListener('click', (e) => {
    if (e.target === m) {
      m.classList.remove('show');
      document.body.style.overflow = '';
    }
  });
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.show').forEach(m => {
      m.classList.remove('show');
    });
    document.body.style.overflow = '';
  }
});
