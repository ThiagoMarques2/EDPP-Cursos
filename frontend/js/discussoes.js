/**
 * Discussões — abre modal com comentários ao clicar num card.
 * Cada card tem seu próprio pool de comentários (10 visíveis + "carregando" infinito).
 */
(function () {
  'use strict';

  // ---- Pool de comentários fictícios (rotacionados por card) ----
  const POOL_COMENTARIOS = [
    { nome: 'Lucas Almeida', cor: '#3B82F6', tempo: 'há 12 min', texto: 'Excelente discussão! Eu comecei do mesmo jeito e o segredo foi praticar todo dia, mesmo que pouco.' },
    { nome: 'Beatriz Rocha', cor: '#10B981', tempo: 'há 28 min', texto: 'Concordo totalmente. Vale a pena também participar de comunidades e tirar dúvidas em grupo.' },
    { nome: 'Pedro Henrique', cor: '#F59E0B', tempo: 'há 45 min', texto: 'Eu recomendaria começar com projetos pequenos antes de partir para algo mais complexo.' },
    { nome: 'Camila Souza', cor: '#EF4444', tempo: 'há 1 h', texto: 'Ótimo ponto! Documentação oficial sempre ajuda muito quando estamos perdidos.' },
    { nome: 'Diego Martins', cor: '#A855F7', tempo: 'há 1 h', texto: 'Recomendo separar uma hora por dia só para estudar — em pouco tempo você vê resultado.' },
    { nome: 'Larissa Mendes', cor: '#6366F1', tempo: 'há 2 h', texto: 'Fiz exatamente assim no ano passado e hoje já trabalho na área. Persistência é tudo!' },
    { nome: 'Thiago Barros', cor: '#0EA5E9', tempo: 'há 2 h', texto: 'Posso indicar alguns canais no YouTube que me ajudaram bastante, se alguém quiser.' },
    { nome: 'Juliana Faria', cor: '#EC4899', tempo: 'há 3 h', texto: 'Aproveitando o tópico: alguém aqui já fez certificação? Vale a pena no início?' },
    { nome: 'Marcos Vinicius', cor: '#14B8A6', tempo: 'há 4 h', texto: 'Eu uso a técnica de Pomodoro pra estudar — me ajudou a manter o foco por mais tempo.' },
    { nome: 'Renata Carvalho', cor: '#F97316', tempo: 'há 5 h', texto: 'Salvando esse post! Muito conteúdo bom nos comentários, obrigada a todos.' },
    { nome: 'Gabriel Nunes', cor: '#84CC16', tempo: 'há 6 h', texto: 'Importante também não comparar seu progresso com o dos outros. Cada um no seu ritmo.' },
    { nome: 'Patrícia Lima', cor: '#8B5CF6', tempo: 'há 7 h', texto: 'Que discussão rica! Já aprendi muito só lendo as respostas aqui.' },
  ];

  // ---- Inicializa avatar e cor a partir do card ----
  function dadosDoCard(card) {
    const avatar = card.querySelector('.discussao-avatar');
    const info = card.querySelector('.discussao-info');
    const titulo = card.querySelector('.discussao-titulo');
    const preview = card.querySelector('.discussao-preview');
    const etiqueta = card.querySelector('.discussao-etiqueta');
    const rodape = card.querySelector('.discussao-rodape');

    return {
      iniciais: avatar ? avatar.textContent.trim() : '?',
      cor: avatar ? (avatar.style.background || '#3B82F6') : '#3B82F6',
      nome: info ? info.querySelector('strong').textContent : 'Usuário',
      meta: info ? info.querySelector('span').textContent : '',
      titulo: titulo ? titulo.textContent : '',
      texto: preview ? preview.textContent : '',
      etiqueta: etiqueta ? etiqueta.outerHTML : '',
      rodape: rodape ? rodape.innerHTML : '',
    };
  }

  // ---- Cria o modal (uma única vez) ----
  function criarModal() {
    let dlg = document.getElementById('modalDiscussao');
    if (dlg) return dlg;

    dlg = document.createElement('dialog');
    dlg.id = 'modalDiscussao';
    dlg.className = 'modal modal-discussao';
    dlg.innerHTML = `
      <article class="discussao-conteudo">
        <header class="discussao-modal-header">
          <button class="discussao-modal-fechar" aria-label="Fechar">&times;</button>
          <section class="discussao-modal-autor">
            <figure class="discussao-avatar" data-avatar></figure>
            <section class="discussao-info">
              <strong data-nome></strong>
              <span data-meta></span>
            </section>
            <span data-etiqueta></span>
          </section>
          <h2 class="discussao-modal-titulo" data-titulo></h2>
          <p class="discussao-modal-texto" data-texto></p>
          <footer class="discussao-modal-meta" data-rodape></footer>
        </header>
        <section class="comentarios-secao">
          <h3 class="comentarios-titulo">💬 Comentários</h3>
          <ul class="comentarios-lista" data-comentarios></ul>
          <div class="carregando-mais" data-carregando>
            <div class="carregando-spinner"></div>
            <span class="carregando-texto">Carregando mais comentários…</span>
          </div>
        </section>
      </article>
    `;
    document.body.appendChild(dlg);

    // fechar
    dlg.querySelector('.discussao-modal-fechar').addEventListener('click', () => dlg.close());
    dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

    return dlg;
  }

  // ---- Renderiza um comentário ----
  function renderComentario(c) {
    const iniciais = c.nome.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
    const li = document.createElement('li');
    li.className = 'comentario-item';
    li.innerHTML = `
      <figure class="comentario-avatar" style="background:${c.cor}">${iniciais}</figure>
      <div class="comentario-corpo">
        <div class="comentario-cabecalho">
          <span class="comentario-nome"></span>
          <span class="comentario-tempo"></span>
        </div>
        <p class="comentario-texto"></p>
        <div class="comentario-acoes">
          <span>👍 Curtir</span>
          <span>↩ Responder</span>
        </div>
      </div>
    `;
    li.querySelector('.comentario-nome').textContent = c.nome;
    li.querySelector('.comentario-tempo').textContent = c.tempo;
    li.querySelector('.comentario-texto').textContent = c.texto;
    return li;
  }

  // ---- Embaralha levemente o pool por card (variação) ----
  function comentariosParaCard(indiceCard) {
    const arr = [...POOL_COMENTARIOS];
    // rotação determinística por índice
    const offset = indiceCard % arr.length;
    return arr.slice(offset).concat(arr.slice(0, offset));
  }

  // ---- Abre modal preenchido para um card ----
  function abrirParaCard(card, indice) {
    const dlg = criarModal();
    const dados = dadosDoCard(card);

    const avatar = dlg.querySelector('[data-avatar]');
    avatar.textContent = dados.iniciais;
    avatar.style.background = dados.cor;
    avatar.style.color = '#fff';

    dlg.querySelector('[data-nome]').textContent = dados.nome;
    dlg.querySelector('[data-meta]').textContent = dados.meta;
    dlg.querySelector('[data-titulo]').textContent = dados.titulo;
    dlg.querySelector('[data-texto]').textContent = dados.texto;
    // usa innerHTML num wrapper para preservar o atributo data-etiqueta entre aberturas
    dlg.querySelector('[data-etiqueta]').innerHTML = dados.etiqueta || '';
    dlg.querySelector('[data-rodape]').innerHTML = dados.rodape;

    // popula comentários (10 fixos por card)
    const lista = dlg.querySelector('[data-comentarios]');
    lista.innerHTML = '';
    const comentarios = comentariosParaCard(indice).slice(0, 10);
    comentarios.forEach((c, i) => {
      const item = renderComentario(c);
      item.style.animationDelay = (i * 40) + 'ms';
      lista.appendChild(item);
    });

    // garante carregando visível
    dlg.querySelector('[data-carregando]').style.display = 'flex';
    // reset scroll
    dlg.querySelector('.comentarios-secao').scrollTop = 0;

    if (typeof dlg.showModal === 'function') dlg.showModal();
    else dlg.setAttribute('open', '');
  }

  // ---- Bind nos cards ----
  function init() {
    const cards = document.querySelectorAll('.discussao-card');
    cards.forEach((card, i) => {
      card.setAttribute('role', 'button');
      card.setAttribute('tabindex', '0');
      card.addEventListener('click', () => abrirParaCard(card, i));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          abrirParaCard(card, i);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
