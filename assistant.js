(() => {
  const root=document.createElement('aside');root.id='portfolio-assistant';root.setAttribute('aria-label','Assistente do portfólio');
  root.innerHTML=`
    <section class="pa-panel" aria-label="Conversa com o assistente">
      <header class="pa-head"><div class="pa-brand"><span class="pa-avatar" aria-hidden="true">✦</span><span>Assistente do Filipe</span></div>
        <div class="pa-head-actions"><button type="button" data-close>Fechar</button><button type="button" data-disable>Desligar</button></div>
      </header>
      <div class="pa-messages" id="pa-messages" aria-live="polite"></div>
      <div class="pa-actions" id="pa-actions">
        <button class="pa-chip" data-topic="sobre">Quem é o Filipe?</button><button class="pa-chip" data-topic="projetos">Projetos</button>
        <button class="pa-chip" data-topic="habilidades">Habilidades</button><button class="pa-chip" data-topic="formacao">Formação</button>
        <button class="pa-chip" data-topic="disponibilidade">Disponibilidade</button><button class="pa-chip" data-topic="contato">Contato</button>
      </div>
      <div class="pa-note">Assistente guiado com informações deste portfólio.</div>
      <form class="pa-footer" id="pa-form"><input class="pa-input" id="pa-input" aria-label="Digite sua pergunta" placeholder="Pergunte algo..." autocomplete="off"><button class="pa-send" aria-label="Enviar" type="submit">➤</button></form>
    </section>
    <button class="pa-launch" type="button" aria-label="Abrir assistente" title="Fale com o assistente">✦</button>`;
  document.body.appendChild(root);
  const messages=root.querySelector('#pa-messages'),input=root.querySelector('#pa-input');
  const topics={
    sobre:{text:'Filipe é estudante de Ciência da Computação. Gosta de criar projetos, aprender na prática e explorar tecnologia, inteligência artificial e desenvolvimento web.',section:'about',label:'Ver sobre mim'},
    projetos:{text:'Entre os projetos apresentados estão a plataforma Rumo à Aprovação, voltada a estudos para concursos, e Seu Céu (Dia & Noite), uma experiência interativa com ciclo de dia e noite.',section:'projects',label:'Ver projetos'},
    habilidades:{text:'O portfólio apresenta conhecimentos e estudos em HTML, CSS, JavaScript, Python e ferramentas de desenvolvimento. As competências estão em evolução, com foco em aprendizado prático.',section:'skills',label:'Ver habilidades'},
    formacao:{text:'Filipe cursa Ciência da Computação na Gran Faculdade e concluiu cursos de Inteligência Artificial I e II pela Universidade Federal da Paraíba (UFPB).',section:'about',label:'Ver apresentação'},
    disponibilidade:{text:'Filipe busca oportunidades de estágio, vagas em tecnologia e projetos freelance. Para conversar sobre uma oportunidade, use a seção de contato.',section:'contact',label:'Ver contato'},
    contato:{text:'Você pode entrar em contato pelo formulário do portfólio, por e-mail ou pelo WhatsApp.',section:'contact',label:'Ir para contato'}
  };
  function addMessage(text,who='bot',action){
    const el=document.createElement('div');el.className='pa-msg '+who;el.textContent=text;messages.appendChild(el);
    if(action){const b=document.createElement('button');b.className='pa-chip';b.type='button';b.textContent=action.label;b.addEventListener('click',()=>document.getElementById(action.section)?.scrollIntoView({behavior:'smooth'}));el.appendChild(document.createElement('br'));el.appendChild(b)}
    messages.scrollTop=messages.scrollHeight;
  }
  function answer(topic){const item=topics[topic];if(!item)return;addMessage(item.text,'bot',{section:item.section,label:item.label})}
  function reply(q){
    const s=q.toLocaleLowerCase('pt-BR');
    if(/quem|sobre|filipe|perfil/.test(s))return answer('sobre');
    if(/projet|portf[oó]lio|site/.test(s))return answer('projetos');
    if(/habil|skill|linguagem|programa|tecnolog/.test(s))return answer('habilidades');
    if(/forma|faculdade|curso|estuda|gradua/.test(s))return answer('formacao');
    if(/vaga|est[aá]gio|freela|dispon|trabalho|contrat/.test(s))return answer('disponibilidade');
    if(/contat|email|e-mail|whats|mensagem/.test(s))return answer('contato');
    addMessage('Posso ajudar com informações sobre o perfil, projetos, habilidades, formação, disponibilidade e contato. Escolha um dos assuntos abaixo para começar.');
  }
  function open(){root.classList.add('pa-open');root.querySelector('.pa-launch').setAttribute('aria-expanded','true');input.focus()}
  root.querySelector('.pa-launch').addEventListener('click',open);
  root.querySelector('[data-close]').addEventListener('click',()=>{root.classList.remove('pa-open');root.querySelector('.pa-launch').focus()});
  root.querySelector('[data-disable]').addEventListener('click',()=>{root.remove()});
  root.querySelectorAll('[data-topic]').forEach(b=>b.addEventListener('click',()=>{const key=b.dataset.topic;addMessage(b.textContent,'user');answer(key)}));
  root.querySelector('#pa-form').addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim();if(!q)return;addMessage(q,'user');input.value='';reply(q)});
  addMessage('Olá! Sou o assistente do portfólio do Filipe. Posso apresentar os projetos, a formação, as habilidades e as formas de contato. O que você gostaria de conhecer?');
})();