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
  const originalButtonText = submitButton ? submitButton.innerHTML : 'Enviar mensagem ↗';

  contactForm.action = 'https://formspree.io/f/mljjlakn';
  contactForm.method = 'POST';

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const honeypot = contactForm.querySelector('[name="_honey"]');
    if (honeypot && honeypot.value) return;

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
    }
    if (formStatus) {
      formStatus.textContent = 'Enviando sua mensagem...';
      formStatus.className = 'form-status';
    }

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { Accept: 'application/json' }
      });

      if (!response.ok) {
        let detail = '';
        try {
          const result = await response.json();
          if (result.errors) detail = ' ' + result.errors.map((item) => item.message).join(' ');
        } catch (_) {}
        throw new Error(detail || 'O serviço não aceitou o envio. Confira a configuração do formulário no Formspree.');
      }

      if (formStatus) {
        formStatus.textContent = 'Mensagem enviada! Obrigado pelo contato. Se necessário, confira o painel do Formspree para confirmar o recebimento.';
        formStatus.classList.add('is-success');
      }
      contactForm.reset();
    } catch (error) {
      if (formStatus) {
        formStatus.textContent = error.message || 'Não foi possível enviar agora. Tente novamente ou use o e-mail abaixo.';
        formStatus.classList.add('is-error');
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
      }
    }
  });
}
