document.addEventListener('DOMContentLoaded', () => {
    const languageTranslations = {
        en: {
            'Sobre': 'About',
            'Formação: Ciência da Computação — Gran Faculdade.': 'Education: Computer Science — Gran Faculdade.',
            'Projetos': 'Projects',
            'Competências': 'Skills',
            'Cursos e formação complementar': 'Courses and additional training',
            'Aprendizado contínuo em inteligência artificial, produtividade e análise de dados.': 'Continuous learning in artificial intelligence, productivity, and data analysis.',
            'Finanças pessoais · PWA': 'Personal finance · PWA',
            'Fino — Controle Financeiro': 'Fino — Personal Finance',
            'Aplicação para organizar renda, despesas e receitas extras, acompanhar gastos por categoria e definir limites mensais. Os dados ficam salvos no próprio navegador.': 'An app to organize income, expenses, and extra earnings, track spending by category, and set monthly limits. Data is stored in the browser.',
            'Ver aplicação ↗': 'Open app ↗',
            'Código no GitHub ↗': 'Source on GitHub ↗',
            'Educação · Plataforma de estudos': 'Education · Study platform',
            'Plataforma de preparação para concurso público, com conteúdos organizados por edital, banco de questões, simulados e acompanhamento do estudo.': 'A public-exam study platform with syllabus-based content, a question bank, mock exams, and study tracking.',
            'Experimento interativo': 'Interactive experiment',
            'Experiência visual interativa que explora a passagem entre dia e noite, com estrelas e efeitos animados no navegador.': 'An interactive visual experience exploring the day-night cycle, with stars and browser animations.',
            'Estudante de Ciência da Computação com interesse em': 'Computer Science student interested in',
            'tecnologia e inteligência artificial.': 'technology and artificial intelligence.',
            'Sou': 'I am',
            'estudante de Ciência da Computação. Gosto de aprender na prática e transformar ideias em projetos e soluções digitais, explorando desenvolvimento web e inteligência artificial.': 'a Computer Science student. I enjoy learning by doing and turning ideas into digital projects and solutions, exploring web development and artificial intelligence.',
            'Minha trajetória na tecnologia é construída principalmente por meio dos estudos e de projetos próprios. Gosto de entender como as ferramentas funcionam, experimentar possibilidades e transformar ideias em aplicações úteis no dia a dia.': 'My path in technology is built mainly through study and personal projects. I enjoy understanding how tools work, exploring possibilities, and turning ideas into useful everyday applications.',
            'Tenho explorado o desenvolvimento web e o uso de inteligência artificial como apoio à criação e melhoria de soluções. Procuro evoluir com consistência, reconhecer o que ainda preciso aprender e manter uma postura aberta a feedbacks e novos desafios.': 'I have been exploring web development and using artificial intelligence to support the creation and improvement of solutions. I aim to grow consistently, recognize what I still need to learn, and stay open to feedback and new challenges.',
            'Fundamentos de programação, lógica, algoritmos e contato inicial com análise de dados e ferramentas de inteligência artificial.': 'Programming fundamentals, logic, algorithms, and introductory exposure to data analysis and AI tools.',
            'HTML, CSS e JavaScript aplicados em páginas e projetos pessoais, com atenção à responsividade, organização e experiência de uso.': 'HTML, CSS, and JavaScript applied to personal websites and projects, with attention to responsiveness, structure, and user experience.',
            'Ferramentas e desenvolvimento': 'Tools and development',
            'Git e GitHub, Visual Studio Code, armazenamento local no navegador e publicação de projetos web. Em evolução nos fundamentos de Python.': 'Git and GitHub, Visual Studio Code, browser local storage, and web project publishing. Continuing to develop Python fundamentals.',
            'Universidade Federal da Paraíba (UFPB)': 'Federal University of Paraíba (UFPB)',
            'Inteligência Artificial I — Conceitos e Prompts': 'Artificial Intelligence I — Concepts and Prompts',
            'Inteligência Artificial II — Introdução às IAs para o Mundo Acadêmico': 'Artificial Intelligence II — Introduction to AI for the Academic World',
            'Fundação Bradesco / Microsoft': 'Bradesco Foundation / Microsoft',
            'Comunicação e Mobilização com IA': 'Communication and Engagement with AI',
            'IA para Profissionais da Justiça': 'AI for Legal Professionals',
            'Introdução à Análise de Dados — Microsoft Power BI': 'Introduction to Data Analysis — Microsoft Power BI',
            'Santander Open Academy / Google': 'Santander Open Academy / Google',
            'Inteligência Artificial e Produtividade': 'Artificial Intelligence and Productivity',
            'Hashtag Treinamentos': 'Hashtag Training',
            'Imersão Agentes IA': 'AI Agents Immersion',
            'horas': 'hours',
            'Estudante de Ciência da Computação': 'Computer Science Student',
            'Portfólio de Filipe Almeida, estudante de Ciência da Computação interessado em tecnologia, inteligência artificial e desenvolvimento web. Conheça seus projetos e cursos.': 'Portfolio of Filipe Almeida, a Computer Science student interested in technology, artificial intelligence, and web development. Explore his projects and courses.'
            'Contato': 'Contact',
            'Ativar tema claro': 'Enable light theme',
            'Ativar tema escuro': 'Enable dark theme',
            'Abrir menu': 'Open menu',
            'Fechar menu': 'Close menu',
            'Disponível para novos projetos': 'Available for new projects',
            'Aberto a oportunidades de estágio e projetos': 'Open to internship opportunities and projects',
            ', estudante de Ciência da Computação. Gosto de aprender na prática e transformar ideias em projetos e soluções digitais, explorando desenvolvimento web e inteligência artificial.': ', a Computer Science student. I enjoy learning by doing and turning ideas into digital projects and solutions, exploring web development and artificial intelligence.',
            '30 horas': '30 hours',
            '2 horas': '2 hours',
            '5 horas': '5 hours',
            '8 horas': '8 hours',
            'Ciência da Computação,': 'Computer Science,',
            'Análise de Dados': 'Data Analysis',
            '& Engenharia de Software Full Stack.': '& Full-Stack Software Engineering.',
            'Sou': 'I’m',
            'Filipe Almeida': 'Filipe Almeida',
            ', estudante de': ', a student in',
            'Ciência da Computação': 'Computer Science',
            'e': 'and a',
            'Analista de Dados': 'Data Analyst',
            '. Combino fundamentos teóricos rigorosos, modelagem de dados e análise estatística com o ecossistema': '. I combine strong theoretical foundations, data modeling, and statistical analysis with the',
            'Sobre Mim': 'About Me',
            'Atualmente cursando': 'Currently studying',
            'e em capacitação contínua como': 'and continuously training as a',
            ', possuo uma visão holística do ciclo de desenvolvimento de software e inteligência de dados. Uno a base de algoritmos, engenharia de software e análise quantitativa para projetar soluções elegantes, orientadas a dados e escaláveis.': ', I have a holistic view of the software development and data intelligence lifecycle. I combine algorithms, software engineering, and quantitative analysis to build elegant, data-driven, and scalable solutions.',
            'Tenho experiência no desenvolvimento de aplicações web completas — desde sistemas interativos e plataformas de questões com métricas de desempenho até APIs RESTful, modelagem de bancos de dados relacionais/NoSQL e visualizações de dados para apoio à tomada de decisão.': 'I have experience building complete web applications—from interactive systems and quiz platforms with performance metrics to RESTful APIs, relational/NoSQL database modeling, and data visualizations that support decision-making.',
            'Projetos em Destaque': 'Featured Projects',
            'Aplicações reais, plataformas interativas e inteligência de dados.': 'Real-world applications, interactive platforms, and data intelligence.',
            'Plataforma interativa de estudos e preparação para concursos públicos. Conta com resolução de questões com gabarito, controle de progresso e estatísticas analíticas de desempenho.': 'An interactive study platform for public service exams, featuring questions with answer keys, progress tracking, and performance analytics.',
            'Acessar Repositório no GitHub': 'View repository on GitHub',
            'Seu Céu (Dia & Noite)': 'Your Sky (Day & Night)',
            'Aplicação interativa com simulação do ciclo de dia e noite, renderização de estrela personalizada e efeitos visuais animados em tempo real.': 'An interactive app simulating the day-night cycle, with custom star rendering and real-time animated visual effects.',
            'Ecossistema & Competências': 'Ecosystem & Skills',
            'Ciência da Computação & Dados': 'Computer Science & Data',
            'Estrutura de Dados, Algoritmos, Análise de Dados, Python (Pandas, NumPy), SQL Avançado, Estatística Aplicada, Visualização de Dados e ETL.': 'Data Structures, Algorithms, Data Analysis, Python (Pandas, NumPy), Advanced SQL, Applied Statistics, Data Visualization, and ETL.',
            'Front-End': 'Front End',
            'JavaScript (ES6+), TypeScript, React, Next.js, HTML5 Semântico, CSS Grid / Flexbox, Tailwind CSS, Animações e UX/UI Responsivo.': 'JavaScript (ES6+), TypeScript, React, Next.js, Semantic HTML5, CSS Grid / Flexbox, Tailwind CSS, animations, and responsive UX/UI.',
            'Back-End & Infra': 'Back End & Infrastructure',
            'Node.js, Express, Go (Gin Framework), APIs RESTful, PostgreSQL, MySQL, Firebase, Git / GitHub, Docker e Deploy Automatizado.': 'Node.js, Express, Go (Gin Framework), RESTful APIs, PostgreSQL, MySQL, Firebase, Git / GitHub, Docker, and automated deployments.',
            'CONTATO': 'CONTACT',
            'Vamos conversar sobre o seu projeto': 'Let’s talk about your project',
            'Estou aberto a novos desafios, projetos e oportunidades. Envie uma mensagem e responderei assim que possível.': 'I’m open to new challenges, projects, and opportunities. Send me a message and I’ll get back to you as soon as I can.',
            'Enviar e-mail': 'Send an email',
            'Conversar no WhatsApp': 'Chat on WhatsApp',
            'Disponível para vagas, projetos freelance e parcerias': 'Available for jobs, freelance projects, and partnerships',
            'MANDE UMA MENSAGEM': 'SEND A MESSAGE',
            'Não preencha este campo': 'Leave this field empty',
            'Nome': 'Name',
            'Seu nome': 'Your name',
            'WhatsApp': 'WhatsApp',
            '(opcional)': '(optional)',
            'Adicione seu telefone, se preferir': 'Add your phone number, if you prefer',
            'Empresa': 'Company',
            'Nome da empresa': 'Company name',
            'Assunto': 'Subject',
            'Selecione um assunto': 'Choose a subject',
            'Oportunidade de trabalho': 'Job opportunity',
            'Projeto freelance': 'Freelance project',
            'Análise de dados': 'Data analysis',
            'Outro assunto': 'Other',
            'Mensagem': 'Message',
            'voce@exemplo.com': 'you@example.com',
            'Conte um pouco sobre o que você precisa...': 'Tell me a little about what you need...',
            'Mínimo de 20 caracteres': 'At least 20 characters',
            'Enviar Mensagem': 'Send Message',
            'Enviando mensagem...': 'Sending message...',
            'Preencha os campos obrigatórios e escreva uma mensagem com pelo menos 20 caracteres.': 'Complete the required fields and write a message of at least 20 characters.',
            'Mensagem enviada com sucesso! Em breve entrarei em contato.': 'Message sent successfully! I’ll be in touch soon.',
            'Não foi possível enviar pelo formulário. Você ainda pode enviar sua mensagem por e-mail: ': 'The form could not send your message. You can still email me: ',
            'abrir e-mail para': 'open email to',
            '© 2026 Filipe Almeida • Ciência da Computação, Análise de Dados & Desenvolvimento Web.': '© 2026 Filipe Almeida • Computer Science, Data Analysis & Web Development.'
        },
        es: {
            'Sobre': 'Acerca de',
            'Formação: Ciência da Computação — Gran Faculdade.': 'Formación: Ciencias de la Computación — Gran Faculdade.',
            'Projetos': 'Proyectos',
            'Competências': 'Habilidades',
            'Cursos e formação complementar': 'Cursos y formación complementaria',
            'Aprendizado contínuo em inteligência artificial, produtividade e análise de dados.': 'Aprendizaje continuo en inteligencia artificial, productividad y análisis de datos.',
            'Finanças pessoais · PWA': 'Finanzas personales · PWA',
            'Fino — Controle Financeiro': 'Fino — Control financiero',
            'Aplicação para organizar renda, despesas e receitas extras, acompanhar gastos por categoria e definir limites mensais. Os dados ficam salvos no próprio navegador.': 'Aplicación para organizar ingresos, gastos e ingresos extra, controlar gastos por categoría y definir límites mensuales. Los datos se guardan en el navegador.',
            'Ver aplicação ↗': 'Abrir aplicación ↗',
            'Código no GitHub ↗': 'Código en GitHub ↗',
            'Educação · Plataforma de estudos': 'Educación · Plataforma de estudio',
            'Plataforma de preparação para concurso público, com conteúdos organizados por edital, banco de questões, simulados e acompanhamento do estudo.': 'Plataforma de preparación para oposiciones, con contenidos organizados por convocatoria, banco de preguntas, simulacros y seguimiento del estudio.',
            'Experimento interativo': 'Experimento interactivo',
            'Experiência visual interativa que explora a passagem entre dia e noite, com estrelas e efeitos animados no navegador.': 'Experiencia visual interactiva que explora el paso del día a la noche, con estrellas y efectos animados en el navegador.',
            'Estudante de Ciência da Computação com interesse em': 'Estudiante de Ciencias de la Computación interesado en',
            'tecnologia e inteligência artificial.': 'tecnología e inteligencia artificial.',
            'estudante de Ciência da Computação. Gosto de aprender na prática e transformar ideias em projetos e soluções digitais, explorando desenvolvimento web e inteligência artificial.': 'estudiante de Ciencias de la Computación. Me gusta aprender haciendo y convertir ideas en proyectos y soluciones digitales, explorando el desarrollo web y la inteligencia artificial.',
            'Minha trajetória na tecnologia é construída principalmente por meio dos estudos e de projetos próprios. Gosto de entender como as ferramentas funcionam, experimentar possibilidades e transformar ideias em aplicações úteis no dia a dia.': 'Mi camino en la tecnología se construye principalmente a través del estudio y de proyectos propios. Me gusta entender cómo funcionan las herramientas, explorar posibilidades y convertir ideas en aplicaciones útiles.',
            'Tenho explorado o desenvolvimento web e o uso de inteligência artificial como apoio à criação e melhoria de soluções. Procuro evoluir com consistência, reconhecer o que ainda preciso aprender e manter uma postura aberta a feedbacks e novos desafios.': 'He explorado el desarrollo web y el uso de la inteligencia artificial para apoyar la creación y mejora de soluciones. Busco avanzar con constancia, reconocer lo que aún necesito aprender y mantenerme abierto a comentarios y nuevos retos.',
            'Fundamentos de programação, lógica, algoritmos e contato inicial com análise de dados e ferramentas de inteligência artificial.': 'Fundamentos de programación, lógica, algoritmos y contacto inicial con análisis de datos y herramientas de inteligencia artificial.',
            'HTML, CSS e JavaScript aplicados em páginas e projetos pessoais, com atenção à responsividade, organização e experiência de uso.': 'HTML, CSS y JavaScript aplicados a páginas y proyectos personales, con atención a la adaptabilidad, organización y experiencia de uso.',
            'Ferramentas e desenvolvimento': 'Herramientas y desarrollo',
            'Git e GitHub, Visual Studio Code, armazenamento local no navegador e publicação de projetos web. Em evolução nos fundamentos de Python.': 'Git y GitHub, Visual Studio Code, almacenamiento local en el navegador y publicación de proyectos web. Continúo desarrollando los fundamentos de Python.',
            'Universidade Federal da Paraíba (UFPB)': 'Universidad Federal de Paraíba (UFPB)',
            'Inteligência Artificial I — Conceitos e Prompts': 'Inteligencia Artificial I — Conceptos y Prompts',
            'Inteligência Artificial II — Introdução às IAs para o Mundo Acadêmico': 'Inteligencia Artificial II — Introducción a las IA para el Mundo Académico',
            'Fundação Bradesco / Microsoft': 'Fundación Bradesco / Microsoft',
            'Comunicação e Mobilização com IA': 'Comunicación y movilización con IA',
            'IA para Profissionais da Justiça': 'IA para profesionales de la justicia',
            'Introdução à Análise de Dados — Microsoft Power BI': 'Introducción al análisis de datos — Microsoft Power BI',
            'Santander Open Academy / Google': 'Santander Open Academy / Google',
            'Inteligência Artificial e Produtividade': 'Inteligencia artificial y productividad',
            'Hashtag Treinamentos': 'Hashtag Formación',
            'Imersão Agentes IA': 'Inmersión en agentes de IA',
            'horas': 'horas',
            'Estudante de Ciência da Computação': 'Estudiante de Ciencias de la Computación',
            'Portfólio de Filipe Almeida, estudante de Ciência da Computação interessado em tecnologia, inteligência artificial e desenvolvimento web. Conheça seus projetos e cursos.': 'Portafolio de Filipe Almeida, estudiante de Ciencias de la Computación interesado en tecnología, inteligencia artificial y desarrollo web. Conoce sus proyectos y cursos.'
            'Contato': 'Contacto',
            'Ativar tema claro': 'Activar tema claro',
            'Ativar tema escuro': 'Activar tema oscuro',
            'Abrir menu': 'Abrir menú',
            'Fechar menu': 'Cerrar menú',
            'Disponível para novos projetos': 'Disponible para nuevos proyectos',
            'Aberto a oportunidades de estágio e projetos': 'Abierto a oportunidades de prácticas y proyectos',
            ', estudante de Ciência da Computação. Gosto de aprender na prática e transformar ideias em projetos e soluções digitais, explorando desenvolvimento web e inteligência artificial.': ', estudiante de Ciencias de la Computación. Me gusta aprender haciendo y convertir ideas en proyectos y soluciones digitales, explorando el desarrollo web y la inteligencia artificial.',
            '30 horas': '30 horas',
            '2 horas': '2 horas',
            '5 horas': '5 horas',
            '8 horas': '8 horas',
            'Ciência da Computação,': 'Ciencias de la Computación,',
            'Análise de Dados': 'Análisis de Datos',
            '& Engenharia de Software Full Stack.': '& Ingeniería de Software Full Stack.',
            'Sou': 'Soy',
            'Filipe Almeida': 'Filipe Almeida',
            ', estudante de': ', estudiante de',
            'Ciência da Computação': 'Ciencias de la Computación',
            'e': 'y',
            'Analista de Dados': 'Analista de Datos',
            '. Combino fundamentos teóricos rigorosos, modelagem de dados e análise estatística com o ecossistema': '. Combino sólidos fundamentos teóricos, modelado de datos y análisis estadístico con el ecosistema',
            'Sobre Mim': 'Sobre mí',
            'Atualmente cursando': 'Actualmente estudio',
            'e em capacitação contínua como': 'y me capacito continuamente como',
            ', possuo uma visão holística do ciclo de desenvolvimento de software e inteligência de dados. Uno a base de algoritmos, engenharia de software e análise quantitativa para projetar soluções elegantes, orientadas a dados e escaláveis.': ', tengo una visión integral del ciclo de desarrollo de software e inteligencia de datos. Combino algoritmos, ingeniería de software y análisis cuantitativo para crear soluciones elegantes, basadas en datos y escalables.',
            'Tenho experiência no desenvolvimento de aplicações web completas — desde sistemas interativos e plataformas de questões com métricas de desempenho até APIs RESTful, modelagem de bancos de dados relacionais/NoSQL e visualizações de dados para apoio à tomada de decisão.': 'Tengo experiencia desarrollando aplicaciones web completas: desde sistemas interactivos y plataformas de preguntas con métricas de rendimiento hasta APIs RESTful, modelado de bases de datos relacionales/NoSQL y visualizaciones de datos para apoyar la toma de decisiones.',
            'Projetos em Destaque': 'Proyectos destacados',
            'Aplicações reais, plataformas interativas e inteligência de dados.': 'Aplicaciones reales, plataformas interactivas e inteligencia de datos.',
            'Plataforma interativa de estudos e preparação para concursos públicos. Conta com resolução de questões com gabarito, controle de progresso e estatísticas analíticas de desempenho.': 'Plataforma interactiva de estudio y preparación para oposiciones, con preguntas y respuestas, seguimiento del progreso y estadísticas de rendimiento.',
            'Acessar Repositório no GitHub': 'Ver repositorio en GitHub',
            'Seu Céu (Dia & Noite)': 'Tu cielo (día y noche)',
            'Aplicação interativa com simulação do ciclo de dia e noite, renderização de estrela personalizada e efeitos visuais animados em tempo real.': 'Aplicación interactiva que simula el ciclo de día y noche, con estrellas personalizadas y efectos visuales animados en tiempo real.',
            'Ecossistema & Competências': 'Ecosistema y habilidades',
            'Ciência da Computação & Dados': 'Ciencias de la Computación y datos',
            'Estrutura de Dados, Algoritmos, Análise de Dados, Python (Pandas, NumPy), SQL Avançado, Estatística Aplicada, Visualização de Dados e ETL.': 'Estructuras de datos, algoritmos, análisis de datos, Python (Pandas, NumPy), SQL avanzado, estadística aplicada, visualización de datos y ETL.',
            'Front-End': 'Front-end',
            'JavaScript (ES6+), TypeScript, React, Next.js, HTML5 Semântico, CSS Grid / Flexbox, Tailwind CSS, Animações e UX/UI Responsivo.': 'JavaScript (ES6+), TypeScript, React, Next.js, HTML5 semántico, CSS Grid / Flexbox, Tailwind CSS, animaciones y UX/UI adaptable.',
            'Back-End & Infra': 'Back-end e infraestructura',
            'Node.js, Express, Go (Gin Framework), APIs RESTful, PostgreSQL, MySQL, Firebase, Git / GitHub, Docker e Deploy Automatizado.': 'Node.js, Express, Go (Gin Framework), APIs RESTful, PostgreSQL, MySQL, Firebase, Git / GitHub, Docker y despliegues automatizados.',
            'CONTATO': 'CONTACTO',
            'Vamos conversar sobre o seu projeto': 'Hablemos de tu proyecto',
            'Estou aberto a novos desafios, projetos e oportunidades. Envie uma mensagem e responderei assim que possível.': 'Estoy abierto a nuevos desafíos, proyectos y oportunidades. Envíame un mensaje y responderé lo antes posible.',
            'Enviar e-mail': 'Enviar correo',
            'Conversar no WhatsApp': 'Hablar por WhatsApp',
            'Disponível para vagas, projetos freelance e parcerias': 'Disponible para empleos, proyectos freelance y colaboraciones',
            'MANDE UMA MENSAGEM': 'ENVÍAME UN MENSAJE',
            'Não preencha este campo': 'Deja este campo vacío',
            'Nome': 'Nombre',
            'Seu nome': 'Tu nombre',
            'WhatsApp': 'WhatsApp',
            '(opcional)': '(opcional)',
            'Adicione seu telefone, se preferir': 'Añade tu teléfono si lo prefieres',
            'Empresa': 'Empresa',
            'Nome da empresa': 'Nombre de la empresa',
            'Assunto': 'Asunto',
            'Selecione um assunto': 'Selecciona un asunto',
            'Oportunidade de trabalho': 'Oportunidad laboral',
            'Projeto freelance': 'Proyecto freelance',
            'Análise de dados': 'Análisis de datos',
            'Outro assunto': 'Otro asunto',
            'Mensagem': 'Mensaje',
            'voce@exemplo.com': 'tu@ejemplo.com',
            'Conte um pouco sobre o que você precisa...': 'Cuéntame un poco qué necesitas...',
            'Mínimo de 20 caracteres': 'Mínimo de 20 caracteres',
            'Enviar Mensagem': 'Enviar mensaje',
            'Enviando mensagem...': 'Enviando mensaje...',
            'Preencha os campos obrigatórios e escreva uma mensagem com pelo menos 20 caracteres.': 'Completa los campos obligatorios y escribe un mensaje de al menos 20 caracteres.',
            'Mensagem enviada com sucesso! Em breve entrarei em contato.': '¡Mensaje enviado! Me pondré en contacto pronto.',
            'Não foi possível enviar pelo formulário. Você ainda pode enviar sua mensagem por e-mail: ': 'No se pudo enviar el mensaje desde el formulario. También puedes escribirme por correo: ',
            'abrir e-mail para': 'escribir a',
            '© 2026 Filipe Almeida • Ciência da Computação, Análise de Dados & Desenvolvimento Web.': '© 2026 Filipe Almeida • Ciencias de la Computación, análisis de datos y desarrollo web.'
        }
    };
    const languageCodes = { 'pt-BR': 'pt-BR', en: 'en', es: 'es' };
    const languageButtons = document.querySelectorAll('.language-btn');
    let currentLanguage = localStorage.getItem('portfolio_language') || 'pt-BR';

    function translateTextNodes(language) {
        const dictionary = languageTranslations[language] || {};
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        let node;

        while ((node = walker.nextNode())) {
            if (node.parentElement.closest('script, style')) continue;
            if (node.originalPortugueseText === undefined) {
                node.originalPortugueseText = node.nodeValue;
            }

            const original = node.originalPortugueseText;
            const trimmed = original.trim();
            const normalized = trimmed.replace(/\s+/g, ' ');
            const translated = dictionary[normalized];
            if (translated === undefined) {
                node.nodeValue = original;
                continue;
            }

            const leading = original.match(/^\s*/)[0];
            const trailing = original.match(/\s*$/)[0];
            node.nodeValue = `${leading}${translated}${trailing}`;
        }
    }

    function applyLanguage(language) {
        currentLanguage = languageCodes[language] ? language : 'pt-BR';
        const htmlLanguage = languageCodes[currentLanguage];
        document.documentElement.lang = htmlLanguage;
        translateTextNodes(currentLanguage);
        document.querySelector('.language-switch')?.setAttribute(
            'aria-label',
            currentLanguage === 'en' ? 'Select language' : currentLanguage === 'es' ? 'Seleccionar idioma' : 'Selecionar idioma'
        );
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            const themeLabelKey = isDark ? 'Ativar tema claro' : 'Ativar tema escuro';
            const themeLabel = languageTranslations[currentLanguage]?.[themeLabelKey] || themeLabelKey;
            themeToggle.setAttribute('aria-label', themeLabel);
            themeToggle.setAttribute('title', themeLabel);
        }
        const mobileToggle = document.getElementById('mobile-toggle');
        if (mobileToggle) {
            const labelKey = mobileToggle.getAttribute('aria-expanded') === 'true' ? 'Fechar menu' : 'Abrir menu';
            mobileToggle.setAttribute('aria-label', languageTranslations[currentLanguage]?.[labelKey] || labelKey);
        }
        const whatsappLink = document.querySelector('.contact-link-secondary');
        if (whatsappLink) {
            const whatsappMessages = {
                'pt-BR': 'Olá, Filipe! Vi seu portfólio e gostaria de conversar.',
                en: 'Hi, Filipe! I saw your portfolio and would like to talk.',
                es: '¡Hola, Filipe! Vi tu portafolio y me gustaría conversar.'
            };
            whatsappLink.href = `https://wa.me/5583998591028?text=${encodeURIComponent(whatsappMessages[currentLanguage])}`;
        }
        languageButtons.forEach(button => {
            const isSelected = button.dataset.language === currentLanguage;
            button.setAttribute('aria-pressed', String(isSelected));
        });

        const labels = {
            'pt-BR': {
                title: 'Filipe Almeida | Estudante de Ciência da Computação',
                description: 'Portfólio de Filipe Almeida, estudante de Ciência da Computação interessado em tecnologia, inteligência artificial e desenvolvimento web. Conheça seus projetos e cursos.'
            },
            en: {
                title: 'Filipe Almeida | Computer Science Student',
                description: 'Portfolio of Filipe Almeida, a Computer Science student interested in technology, artificial intelligence, and web development. Explore his projects and courses.'
            },
            es: {
                title: 'Filipe Almeida | Estudiante de Ciencias de la Computación',
                description: 'Portafolio de Filipe Almeida, estudiante de Ciencias de la Computación interesado en tecnología, inteligencia artificial y desarrollo web. Conoce sus proyectos y cursos.'
            }
        }[currentLanguage];
        document.title = labels.title;
        document.querySelector('meta[name="description"]').content = labels.description;
        const placeholders = {
            'pt-BR': {
                name: 'Seu nome',
                email: 'voce@exemplo.com',
                whatsapp: 'Adicione seu telefone, se preferir',
                company: 'Nome da empresa',
                message: 'Conte um pouco sobre o que você precisa...'
            },
            en: {
                name: 'Your name',
                email: 'you@example.com',
                whatsapp: 'Add your phone number, if you prefer',
                company: 'Company name',
                message: 'Tell me a little about what you need...'
            },
            es: {
                name: 'Tu nombre',
                email: 'tu@ejemplo.com',
                whatsapp: 'Añade tu teléfono si lo prefieres',
                company: 'Nombre de la empresa',
                message: 'Cuéntame un poco qué necesitas...'
            }
        }[currentLanguage];
        Object.entries(placeholders).forEach(([id, placeholder]) => {
            const input = document.getElementById(id);
            if (input) input.placeholder = placeholder;
        });
        localStorage.setItem('portfolio_language', currentLanguage);
    }

    languageButtons.forEach(button => {
        button.addEventListener('click', () => applyLanguage(button.dataset.language));
    });
    applyLanguage(currentLanguage);

    // ==========================================================================
    // 1. GERENCIAMENTO DE TEMA (DARK / LIGHT) COM PERSISTÊNCIA
    // ==========================================================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('portfolio_theme') || 'light';

    function setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        if (themeToggleBtn) {
            const isDark = theme === 'dark';
            const labelKey = isDark ? 'Ativar tema claro' : 'Ativar tema escuro';
            const label = languageTranslations[currentLanguage]?.[labelKey] || labelKey;
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
            const labelKey = isOpen ? 'Fechar menu' : 'Abrir menu';
            mobileToggle.setAttribute('aria-label', languageTranslations[currentLanguage]?.[labelKey] || labelKey);
        }
    }

    // ==========================================================================
    // 3. ENVIO DE E-MAIL PELA API DO PORTFÓLIO
    // ==========================================================================
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('submit-btn');
    const messageInput = document.getElementById('message');
    const messageCount = document.getElementById('message-count');

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
            const websiteInput = document.getElementById('website');

            const name = nameInput ? nameInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const message = messageInput ? messageInput.value.trim() : '';
            const whatsapp = whatsappInput ? whatsappInput.value.trim() : '';
            const company = companyInput ? companyInput.value.trim() : '';
            const subject = subjectInput ? subjectInput.value : '';
            const website = websiteInput ? websiteInput.value.trim() : '';

            if (!name || !email || !subject || message.length < 20) {
                showFeedback(translatedFeedback('Preencha os campos obrigatórios e escreva uma mensagem com pelo menos 20 caracteres.'), 'error');
                return;
            }

            // Bloqueia o botão e ativa feedback visual de carregamento
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = translatedFeedback('Enviando mensagem...');
            }
            
            if (formFeedback) {
                formFeedback.style.display = 'none';
            }

            try {
                if (window.location.protocol === 'file:' || window.location.hostname.endsWith('github.io')) {
                    showEmailProviderChooser(name, email, whatsapp, company, subject, message);
                    return;
                }

                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        whatsapp: whatsapp,
                        company: company,
                        website: website,
                        message: message,
                        subject: subject
                    })
                });

                const result = await response.json().catch(() => ({}));

                if (response.ok && result.success) {
                    showFeedback(translatedFeedback('Mensagem enviada com sucesso! Em breve entrarei em contato.'), 'success');
                    contactForm.reset();
                    if (messageCount) messageCount.textContent = '0';
                } else {
                    const reason = result.message || `O servidor respondeu com o erro HTTP ${response.status}.`;
                    showEmailProviderChooser(name, email, whatsapp, company, subject, message, reason);
                }
            } catch (error) {
                showEmailProviderChooser(
                    name,
                    email,
                    whatsapp,
                    company,
                    subject,
                    message,
                    'Não foi possível conectar à API do portfólio. Verifique se o deploy da Vercel está ativo.'
                );
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = translatedFeedback('Enviar Mensagem');
                }
            }
        });
    }

    function translatedFeedback(text) {
        return languageTranslations[currentLanguage]?.[text] || text;
    }

    function showFeedback(text, type) {
        if (!formFeedback) return;
        formFeedback.textContent = text;
        formFeedback.className = `form-feedback ${type}`;
        formFeedback.style.display = 'block';
    }

    function showEmailProviderChooser(name, email, whatsapp, company, subject, message, reason) {
        if (!formFeedback) return;

        const labels = {
            'pt-BR': {
                title: 'Escolha onde abrir seu e-mail',
                note: 'Sua mensagem já vai preenchida. Escolha um provedor para continuar.',
                open: 'Abrir',
                error: `Não foi possível enviar automaticamente (${reason || 'erro desconhecido'}). Escolha um e-mail para continuar.`
            },
            en: {
                title: 'Choose where to open your email',
                note: 'Your message is ready. Choose a provider to continue.',
                open: 'Open',
                error: `Automatic sending failed (${reason || 'unknown error'}). Choose an email provider to continue.`
            },
            es: {
                title: 'Elige dónde abrir tu correo',
                note: 'Tu mensaje ya está preparado. Elige un proveedor para continuar.',
                open: 'Abrir',
                error: `No se pudo enviar automáticamente (${reason || 'error desconocido'}). Elige un correo para continuar.`
            }
        };
        const text = labels[currentLanguage] || labels['pt-BR'];
        const emailPayload = {
            to: RECIPIENT_EMAIL,
            subject,
            body: createEmailBody(name, email, whatsapp, company, message)
        };
        const encodedMessage = `to=${encodeURIComponent(emailPayload.to)}&subject=${encodeURIComponent(emailPayload.subject)}&body=${encodeURIComponent(emailPayload.body)}`;
        const providers = [
            {
                name: 'iCloud Mail',
                className: 'icloud',
                icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="mail-icloud-gradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#57c7fa"/><stop offset="1" stop-color="#1685e5"/></linearGradient></defs><path fill="url(#mail-icloud-gradient)" d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"/></svg>',
                url: `https://www.icloud.com/mail/compose?${encodedMessage}`
            },
            {
                name: 'Yahoo Mail',
                className: 'yahoo',
                icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#6001d2" d="M2 5h7l5 11 5-11h7L16 25h-7l3-6z"/><path fill="#6001d2" d="M21 22h7v7h-7z"/></svg>',
                url: `https://compose.mail.yahoo.com/?${encodedMessage}`
            },
            {
                name: 'Outlook',
                className: 'outlook',
                icon: '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="#0078d4" d="M14 5h14v22H14z"/><path fill="#28a8ea" d="M4 10h13l10 6-10 6H4z"/><path fill="#0b63b5" d="M4 10v12l9 5V5z"/><path fill="#fff" d="m5.5 12 7.5 4.7 7.5-4.7v8L13 24.7l-7.5-4.6z"/><path fill="#0078d4" d="M5.5 12 13 17l7.5-5v2L13 19l-7.5-5z"/></svg>',
                url: `https://outlook.live.com/mail/0/deeplink/compose?${encodedMessage}`
            },
            {
                name: 'Gmail',
                className: 'gmail',
                icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285f4" d="M18.5 20.5h3.86c.9 0 1.64-.73 1.64-1.64V5.46c0-.57-.15-1.08-.42-1.5l-5.08 3.8z"/><path fill="#34a853" d="M0 5.46v13.4c0 .9.73 1.64 1.64 1.64H5.5V7.76L.42 3.96A2.7 2.7 0 0 0 0 5.46"/><path fill="#ea4335" d="m5.5 7.76 6.5 4.88 6.5-4.88V3.5L12 8.38 5.5 3.5z"/><path fill="#c5221f" d="M5.5 3.5 3.93 2.32A2.42 2.42 0 0 0 .42 3.96L5.5 7.76z"/><path fill="#fbbc04" d="m18.5 7.76 5.08-3.8a2.42 2.42 0 0 0-3.5-1.64L18.5 3.5z"/></svg>',
                url: `https://mail.google.com/mail/?view=cm&fs=1&${encodedMessage}`
            }
        ];

        const heading = document.createElement('strong');
        heading.className = 'mail-chooser-title';
        heading.textContent = text.title;

        const description = document.createElement('p');
        description.className = 'mail-chooser-note';
        description.textContent = text.note;

        const options = document.createElement('div');
        options.className = 'mail-provider-options';
        providers.forEach((provider) => {
            const link = document.createElement('a');
            link.className = `mail-provider mail-provider-${provider.className}`;
            link.href = provider.url;
            link.setAttribute('aria-label', `${text.open} ${provider.name}`);
            link.target = '_blank';
            link.rel = 'noopener noreferrer';

            const icon = document.createElement('span');
            icon.className = `mail-provider-icon mail-provider-icon-${provider.className}`;
            icon.setAttribute('aria-hidden', 'true');
            icon.innerHTML = provider.icon;

            const label = document.createElement('span');
            label.className = 'mail-provider-label';
            label.textContent = provider.name;
            link.append(icon, label);
            options.appendChild(link);
        });

        showFeedback('', 'info');
        formFeedback.append(heading, description, options);
        formFeedback.focus();
    }

    function createEmailBody(name, email, whatsapp, company, message) {
        const body = [
            `${currentLanguage === 'en' ? 'Name' : currentLanguage === 'es' ? 'Nombre' : 'Nome'}: ${name}`,
            `E-mail: ${email}`,
            whatsapp ? `WhatsApp: ${whatsapp}` : '',
            company ? `${currentLanguage === 'en' ? 'Company' : 'Empresa'}: ${company}` : '',
            '',
            message
        ].filter(Boolean).join('\n');
        return body;
    }

    function createEmailUrl(to, subject, body) {
        return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
    // Assistente flutuante: carregamento independente para não interferir no formulário.
    const assistantStyles = document.createElement('link');
    assistantStyles.rel = 'stylesheet';
    assistantStyles.href = 'assistant.css';
    document.head.appendChild(assistantStyles);
    const assistantScript = document.createElement('script');
    assistantScript.src = 'assistant.js';
    assistantScript.defer = true;
    document.body.appendChild(assistantScript);

});
