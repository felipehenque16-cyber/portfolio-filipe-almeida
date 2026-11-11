(() => {
  const avatarPath='M274 417c-16-3-24-16-23-32 1-16 10-27 25-31 6-24 21-43 44-59 21-15 44-24 71-24 27-1 52 5 73 18 24 15 40 36 49 61 17 4 28 19 29 40 2 21-7 38-22 48-3 32-17 57-40 79l-6 20c16 13 32 23 50 36 24 18 45 45 62 77l32 60c11 20 3 39-16 50-20 12-44 10-64-4l-7-5-17 45c-10 25-29 39-58 42H351c-28-2-48-17-58-42l-17-44-8 5c-19 13-43 15-63 4-20-11-27-30-16-50l32-60c17-32 38-59 62-77 18-13 34-24 50-36l-7-20c-23-22-37-47-40-79-16-8-24-25-23-45 1-18 10-31 26-35Z';
  let avatarId=0;
  function createAvatar(className){
    const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg'),defs=document.createElementNS(ns,'defs'),clip=document.createElementNS(ns,'clipPath'),path=document.createElementNS(ns,'path'),image=document.createElementNS(ns,'image');
    const id=`pa-avatar-cutout-${++avatarId}`;
    svg.setAttribute('viewBox','130 245 520 610');svg.setAttribute('class',className);svg.setAttribute('aria-hidden','true');
    clip.setAttribute('id',id);path.setAttribute('d',avatarPath);clip.appendChild(path);defs.appendChild(clip);
    image.setAttribute('href',new URL('assets/filipe-assistant-source.png',document.baseURI).href);image.setAttribute('width','768');image.setAttribute('height','1024');image.setAttribute('clip-path',`url(#${id})`);
    svg.append(defs,image);
    return svg;
  }
  const root=document.createElement('aside');root.id='portfolio-assistant';root.setAttribute('aria-label','Assistente do portfólio');
  root.innerHTML=`
    <section class="pa-panel" role="dialog" aria-modal="false" aria-label="Conversa com o assistente">
      <header class="pa-head"><div class="pa-brand"><span class="pa-avatar-slot"></span><span>Assistente do Filipe</span></div>
      <div class="pa-head-actions"><button type="button" data-close aria-label="Fechar assistente">×</button><button type="button" data-disable>Desligar</button></div>
      </header>
      <div class="pa-messages" id="pa-messages" role="log" aria-live="polite" aria-relevant="additions"></div>
      <div class="pa-actions" id="pa-actions">
        <button class="pa-chip" data-topic="sobre">Quem é o Filipe?</button><button class="pa-chip" data-topic="projetos">Projetos</button>
        <button class="pa-chip" data-topic="habilidades">Habilidades</button><button class="pa-chip" data-topic="formacao">Formação</button>
        <button class="pa-chip" data-topic="disponibilidade">Disponibilidade</button><button class="pa-chip" data-topic="contato">Contato</button>
      </div>
      <div class="pa-note">Assistente guiado com informações deste portfólio.</div>
      <form class="pa-footer" id="pa-form"><input class="pa-input" id="pa-input" aria-label="Digite sua pergunta" placeholder="Pergunte algo..." autocomplete="off"><button class="pa-send" aria-label="Enviar" type="submit">➤</button></form>
    </section>
    <button class="pa-launch" type="button" aria-label="Abrir assistente" title="Fale com o assistente"><span class="pa-launch-avatar-slot"></span></button>`;
  document.body.appendChild(root);
  root.querySelector('.pa-avatar-slot').replaceWith(createAvatar('pa-avatar'));
  root.querySelector('.pa-launch-avatar-slot').replaceWith(createAvatar('pa-launch-avatar'));
  const messages=root.querySelector('#pa-messages'),input=root.querySelector('#pa-input');
  const topics={
    sobre:{text:'Filipe é estudante de Ciência da Computação. Gosta de criar projetos, aprender na prática e explorar tecnologia, inteligência artificial e desenvolvimento web.',section:'about',label:'Ver sobre mim'},
    projetos:{text:'Entre os projetos apresentados estão a plataforma Rumo à Aprovação, voltada a estudos para concursos, e Seu Céu (Dia & Noite), uma experiência interativa com ciclo de dia e noite.',section:'projects',label:'Ver projetos'},
    habilidades:{text:'O portfólio apresenta conhecimentos e estudos em HTML, CSS, JavaScript, Python e ferramentas de desenvolvimento. As competências estão em evolução, com foco em aprendizado prático.',section:'skills',label:'Ver habilidades'},
    formacao:{text:'Filipe está no 5º período de Ciência da Computação na Gran Faculdade e concluiu cursos de Inteligência Artificial I e II pela Universidade Federal da Paraíba (UFPB).',section:'about',label:'Ver apresentação'},
    disponibilidade:{text:'Filipe busca oportunidades de estágio, vagas em tecnologia e projetos freelance, com preferência por trabalhar no período da manhã. Para conversar sobre uma oportunidade, use a seção de contato.',section:'contact',label:'Ver contato'},
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
  root.querySelector('[data-close]').addEventListener('click',()=>{root.classList.remove('pa-open');root.querySelector('.pa-launch').setAttribute('aria-expanded','false');root.querySelector('.pa-launch').focus()});
  root.addEventListener('keydown',event=>{if(event.key==='Escape'&&root.classList.contains('pa-open')){root.classList.remove('pa-open');root.querySelector('.pa-launch').setAttribute('aria-expanded','false');root.querySelector('.pa-launch').focus()}});
  root.querySelector('[data-disable]').addEventListener('click',()=>{root.remove()});
  root.querySelectorAll('[data-topic]').forEach(b=>b.addEventListener('click',()=>{const key=b.dataset.topic;addMessage(b.textContent,'user');answer(key)}));
  root.querySelector('#pa-form').addEventListener('submit',e=>{e.preventDefault();const q=input.value.trim();if(!q)return;addMessage(q,'user');input.value='';reply(q)});
  addMessage('Olá! Sou o assistente do portfólio do Filipe. Posso apresentar os projetos, a formação, as habilidades e as formas de contato. O que você gostaria de conhecer?');
})();