document.addEventListener("DOMContentLoaded", () => {
  const categoriaSelect = document.getElementById("categoria");
  const nivelSelect = document.getElementById("nivel");

  if (!categoriaSelect || !nivelSelect) return;

  function filtrarCursos() {
    const categoria = categoriaSelect.value;
    const nivel = nivelSelect.value;

    const cards = document.querySelectorAll(".curso-card");

    cards.forEach(card => {
      const categorias = (card.dataset.categoria || "").split(" ");
      const cardNivel = card.dataset.nivel;

      const matchCategoria = !categoria || categorias.includes(categoria);
      const matchNivel = !nivel || nivel === cardNivel;

      card.classList.toggle("hidden", !(matchCategoria && matchNivel));
    });
  }

  categoriaSelect.addEventListener("change", filtrarCursos);
  nivelSelect.addEventListener("change", filtrarCursos);

  // 🔥 importante: roda uma vez ao iniciar
  filtrarCursos();

  // 🔥 MUITO IMPORTANTE: observa mudanças no DOM (quando você volta dos detalhes)
  const observer = new MutationObserver(() => {
    filtrarCursos();
  });

  observer.observe(document.querySelector("main"), {
    childList: true,
    subtree: true
  });
});