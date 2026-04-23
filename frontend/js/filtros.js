// Filtro de cursos — versão corrigida
// Correções:
//  1) Não depende mais da classe .hidden (que não existe no CSS).
//     Usa style.display direto.
//  2) Mantém o estado do filtro (categoria + nivel) mesmo quando
//     o <main> é substituído pela tela de detalhe e depois volta.
//  3) MutationObserver com guarda — só reaplica quando a listagem
//     volta a existir, e restaura o valor dos <select>.
(function () {
  // Estado do filtro preservado em memória
  let estadoFiltro = { categoria: "", nivel: "" };

  function filtrarCursos() {
    const categoriaSelect = document.getElementById("categoria");
    const nivelSelect = document.getElementById("nivel");
    if (!categoriaSelect || !nivelSelect) return; // tela de detalhe

    // Restaura visualmente os selects se voltaram resetados
    if (categoriaSelect.value !== estadoFiltro.categoria) {
      categoriaSelect.value = estadoFiltro.categoria;
    }
    if (nivelSelect.value !== estadoFiltro.nivel) {
      nivelSelect.value = estadoFiltro.nivel;
    }

    const categoria = estadoFiltro.categoria;
    const nivel = estadoFiltro.nivel;

    document.querySelectorAll(".curso-card").forEach((card) => {
      const categorias = (card.dataset.categoria || "").split(" ");
      const cardNivel = card.dataset.nivel;

      const matchCategoria = !categoria || categorias.includes(categoria);
      const matchNivel = !nivel || nivel === cardNivel;
      const visivel = matchCategoria && matchNivel;

      // Sem depender de classe .hidden (não existe no CSS).
      card.style.display = visivel ? "" : "none";
    });
  }

  // Delegação: captura o "change" no document.
  // Funciona mesmo depois que os <select> são recriados.
  document.addEventListener("change", (e) => {
    const target = e.target;
    if (!target) return;

    if (target.id === "categoria") {
      estadoFiltro.categoria = target.value;
      filtrarCursos();
    } else if (target.id === "nivel") {
      estadoFiltro.nivel = target.value;
      filtrarCursos();
    }
  });

  // Reaplica os filtros quando a listagem volta a aparecer
  // (depois de fechar a página de detalhe).
  function tentarAplicar() {
    if (
      document.getElementById("categoria") &&
      document.getElementById("nivel") &&
      document.querySelector(".curso-card")
    ) {
      filtrarCursos();
    }
  }

  function init() {
    tentarAplicar();

    const main = document.querySelector("main");
    if (!main) return;

    // Observa o main; debounce para evitar disparos em rajada
    // durante a substituição de innerHTML.
    let pending = false;
    const observer = new MutationObserver(() => {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        tentarAplicar();
      });
    });

    observer.observe(main, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
