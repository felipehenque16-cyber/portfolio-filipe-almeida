const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());


const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const formStatus = document.querySelector('#form-status');
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const responseFrame = document.querySelector('#contact-form-response');
  let waitingForResponse = false;

  // A submissão HTML tradicional não usa fetch e, portanto, evita o preflight CORS.
  contactForm.action = 'https://formsubmit.co/filipehenriqueedson@gmail.com';
  contactForm.method = 'POST';
  contactForm.target = 'contact-form-response';
  contactForm.setAttribute('enctype', 'application/x-www-form-urlencoded');

  contactForm.addEventListener('submit', (event) => {
    const honeypot = contactForm.querySelector('[name="_honey"]');
    if (honeypot && honeypot.value) {
      event.preventDefault();
      return;
    }

    waitingForResponse = true;
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    formStatus.textContent = 'Enviando sua mensagem ao serviço...';
    formStatus.className = 'form-status';
  });

  if (responseFrame) {
    responseFrame.addEventListener('load', () => {
      if (!waitingForResponse) return;
      waitingForResponse = false;
      submitButton.disabled = false;
      submitButton.textContent = 'Enviar mensagem ↗';
      formStatus.textContent = 'A solicitação foi encaminhada ao serviço. Não foi possível confirmar a entrega do e-mail nesta página. Se for seu primeiro envio, confira a caixa de entrada e o spam para ativar o FormSubmit.';
      formStatus.classList.add('is-success');
    });
  }
}
