const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const year = document.getElementById('year');
const form = document.querySelector('.application-form');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = document.querySelector('.form-message');
    if (message) {
      message.textContent = 'Спасибо! Мы свяжемся с вами в ближайшее время.';
    }
    form.reset();
  });
}
