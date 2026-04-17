// Filtro de cursos — versão com event delegation
// Imune a re-render do <main>: o listener vive no document e
// nunca é destruído quando o innerHTML do main é substituído.
(function () {
  function filtrarCursos() {
    const categoriaSelect = document.getElementById("categoria");
    const nivelSelect = document.getElementById("nivel");
    if (!categoriaSelect || !nivelSelect) return; // tela de detalhe

    const categoria = categoriaSelect.value;
    const nivel = nivelSelect.value;

    document.querySelectorAll(".curso-card").forEach((card) => {
      const categorias = (card.dataset.categoria || "").split(" ");
      const cardNivel = card.dataset.nivel;

      const matchCategoria = !categoria || categorias.includes(categoria);
      const matchNivel = !nivel || nivel === cardNivel;

      card.classList.toggle("hidden", !(matchCategoria && matchNivel));
    });
  }

  // Delegação: captura o "change" no document.
  // Funciona mesmo depois que os <select> são recriados,
  // porque o listener está no document, não nos selects.
  document.addEventListener("change", (e) => {
    const target = e.target;
    if (
      target &&
      (target.id === "categoria" || target.id === "nivel")
    ) {
      filtrarCursos();
    }
  });

  // Reaplica os filtros quando a listagem volta a aparecer
  // (depois de fechar a página de detalhe).
  function tentarAplicar() {
    if (document.getElementById("categoria") && document.getElementById("nivel")) {
      filtrarCursos();
    }
  }

  function init() {
    tentarAplicar();

    const main = document.querySelector("main");
    if (!main) return;

    // Observa o main; usa debounce pra evitar disparos em rajada
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
