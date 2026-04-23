document.addEventListener('DOMContentLoaded', () => {
  const btnMenu  = document.getElementById('btnMenu');
  const linksNav = document.getElementById('linksNav');
  if (!btnMenu || !linksNav) return;

  function abrirMenu() {
    linksNav.classList.add('aberto');
    btnMenu.classList.add('aberto');
    btnMenu.setAttribute('aria-expanded', 'true');
    btnMenu.setAttribute('aria-label', 'Fechar menu');
  }

  function fecharMenu() {
    linksNav.classList.remove('aberto');
    btnMenu.classList.remove('aberto');
    btnMenu.setAttribute('aria-expanded', 'false');
    btnMenu.setAttribute('aria-label', 'Abrir menu');
  }

  btnMenu.addEventListener('click', e => {
    e.stopPropagation();
    linksNav.classList.contains('aberto') ? fecharMenu() : abrirMenu();
  });

  linksNav.querySelectorAll('a').forEach(a => a.addEventListener('click', fecharMenu));

  document.addEventListener('click', e => {
    if (!e.target.closest('.header-nav')) fecharMenu();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharMenu();
  });
});
