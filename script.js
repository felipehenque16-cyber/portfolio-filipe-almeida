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

    const honeypot = contactForm.querySelector('[name="_honey"]');
    if (honeypot && honeypot.value) return;

    const originalLabel = submitButton.textContent;
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    try {
      const formData = new FormData(contactForm);
      const payload = Object.fromEntries(formData.entries());
      delete payload._honey;
      payload._subject = 'Nova mensagem pelo portfólio — ' + (payload.subject || 'Contato');
      payload._replyto = payload.email;

      const response = await fetch('https://formsubmit.co/ajax/filipehenriqueedson@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      // O FormSubmit pode retornar HTTP 200 mesmo quando a mensagem não foi aceita.
      if (!response.ok || String(result.success) !== 'true') {
        const reason = result.message || 'O serviço de envio não aceitou a mensagem.';
        throw new Error(reason);
      }

      contactForm.reset();
      formStatus.textContent = 'Mensagem enviada! Obrigado pelo contato.';
      formStatus.classList.add('is-success');
    } catch (error) {
      console.error('Erro ao enviar formulário de contato:', error);
      const reason = String(error.message || '');
      if (/activation|activate|activat|confirm/i.test(reason)) {
        formStatus.textContent = 'O FormSubmit ainda precisa de ativação. Verifique a caixa de entrada e o spam de filipehenriqueedson@gmail.com e confirme o formulário pelo e-mail recebido.';
      } else if (/web server|html files|referer|referrer/i.test(reason)) {
        formStatus.textContent = 'O serviço recusou a página de origem. Abra o portfólio pelo endereço publicado no GitHub Pages, não por um arquivo HTML local.';
      } else if (/failed to fetch|networkerror|load failed/i.test(reason)) {
        formStatus.textContent = 'O navegador não conseguiu conectar ao serviço de envio. Confira a conexão e tente novamente; se persistir, precisamos verificar o bloqueio no navegador ou no serviço.';
      } else {
        formStatus.textContent = 'Falha no envio: ' + (reason || 'resposta inesperada do serviço') + ' — você também pode escrever para filipehenriqueedson@gmail.com.';
      }
      formStatus.classList.add('is-error');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalLabel;
    }
  });
}
