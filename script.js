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

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (contactForm.elements._honey.value) return;

    const originalLabel = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    try {
      const response = await fetch('https://formsubmit.co/ajax/filipehenriqueedson@gmail.com', {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      const result = await response.json();
      if (!response.ok || result.success !== 'true') {
        throw new Error('Não foi possível enviar agora.');
      }
      contactForm.reset();
      formStatus.textContent = 'Mensagem enviada! Obrigado pelo contato.';
      formStatus.classList.add('is-success');
    } catch (error) {
      formStatus.textContent = 'Não conseguimos enviar a mensagem agora. Tente novamente ou escreva para filipehenriqueedson@gmail.com.';
      formStatus.classList.add('is-error');
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalLabel;
    }
  });
}
