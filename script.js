const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#request-form');
const status = document.querySelector('.form-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const phone = data.get('phone');
  const message = data.get('message') || 'Не указано';
  const subject = encodeURIComponent(`Заявка с сайта — ${name}`);
  const body = encodeURIComponent(`Имя: ${name}\nТелефон: ${phone}\nЗадача: ${message}`);
  window.location.href = `mailto:belatriumminsk@gmail.com?subject=${subject}&body=${body}`;
  if (status) status.textContent = 'Открываем почтовое приложение для отправки заявки.';
});
