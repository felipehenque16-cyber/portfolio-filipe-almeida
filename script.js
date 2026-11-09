document.addEventListener('DOMContentLoaded', () => {
    // ==========================================================================
    // 1. GERENCIAMENTO DE TEMA (DARK / LIGHT) COM PERSISTÊNCIA
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('portfolio_theme') || 'dark';

    function setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        if (themeToggleBtn) {
            const isDark = theme === 'dark';
            const label = isDark ? 'Ativar tema claro' : 'Ativar tema escuro';
            themeToggleBtn.setAttribute('aria-label', label);
            themeToggleBtn.setAttribute('title', label);
            themeToggleBtn.setAttribute('aria-pressed', String(isDark));
        }
        localStorage.setItem('portfolio_theme', theme);
    }

    setTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    // ==========================================================================
    // 2. NAVEGAÇÃO MOBILE RESPONSIVA
    // ==========================================================================
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
            setMobileMenuOpen(!isExpanded);
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                setMobileMenuOpen(false);
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                setMobileMenuOpen(false);
                mobileToggle.focus();
            }
        });

        function setMobileMenuOpen(isOpen) {
            navMenu.classList.toggle('active', isOpen);
            mobileToggle.setAttribute('aria-expanded', String(isOpen));
            mobileToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
        }
    }

    // ==========================================================================
    // 3. ENVIO REAL DE E-MAIL VIA API ASSÍNCRONA (WEB3FORMS / FORMSPREE)
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('submit-btn');
    const messageInput = document.getElementById('message');
    const messageCount = document.getElementById('message-count');

    // Chave de acesso gratuita Web3Forms enviando diretamente para filipehenriquedson@gmail.com
    const WEB3FORMS_ACCESS_KEY = "Ymljjlakn"; 
    const RECIPIENT_EMAIL = "filipehenriqueedson@gmail.com";

    if (messageInput && messageCount) {
        messageInput.addEventListener('input', () => {
            messageCount.textContent = String(messageInput.value.length);
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const whatsappInput = document.getElementById('whatsapp');
            const companyInput = document.getElementById('company');
            const subjectInput = document.getElementById('subject');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';
            const whatsapp = whatsappInput ? whatsappInput.value.trim() : '';
            const company = companyInput ? companyInput.value.trim() : '';
            const subject = subjectInput ? subjectInput.value : '';

            if (!name || !email || !subject || message.length < 20) {
                showFeedback('Preencha os campos obrigatórios e escreva uma mensagem com pelo menos 20 caracteres.', 'error');
                return;
            }

            // Bloqueia o botão e ativa feedback visual de carregamento
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando mensagem...';
            }
            
            if (formFeedback) {
                formFeedback.style.display = 'none';
            }

            // Tenta o disparo assíncrono via API
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        access_key: WEB3FORMS_ACCESS_KEY,
                        name: name,
                        email: email,
                        whatsapp: whatsapp,
                        company: company,
                        message: message,
                        subject: `${subject} - ${name}`
                    })
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    showFeedback('Mensagem enviada com sucesso! Em breve entrarei em contato.', 'success');
                    contactForm.reset();
                    if (messageCount) messageCount.textContent = '0';
                } else {
                    showEmailFallback(name, email, whatsapp, company, subject, message);
                }
            } catch (error) {
                showEmailFallback(name, email, whatsapp, company, subject, message);
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enviar Mensagem';
                }
            }
        });
    }

    function showFeedback(text, type) {
        if (!formFeedback) return;
        formFeedback.textContent = text;
        formFeedback.className = `form-feedback ${type}`;
        formFeedback.style.display = 'block';
    }

    function showEmailFallback(name, email, whatsapp, company, subject, message) {
        if (!formFeedback) return;

        showFeedback('Não foi possível enviar pelo formulário. Você ainda pode enviar sua mensagem por e-mail: ', 'error');

        const emailSubject = `${subject} - ${name}`;
        const body = [
            `Nome: ${name}`,
            `E-mail: ${email}`,
            whatsapp ? `WhatsApp: ${whatsapp}` : '',
            company ? `Empresa: ${company}` : '',
            '',
            message
        ].filter(Boolean).join('\n');
        const emailLink = document.createElement('a');
        emailLink.href = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
        emailLink.textContent = `abrir e-mail para ${RECIPIENT_EMAIL}`;
        formFeedback.appendChild(emailLink);
    }

    // ==========================================================================
    // 4. MICRO-INTERAÇÕES NOS CARDS GLASSMORPHISM
    // ==========================================================================
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
