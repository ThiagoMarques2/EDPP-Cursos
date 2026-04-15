const categoriaSelect = document.getElementById("categoria");
const nivelSelect = document.getElementById("nivel");
const cards = document.querySelectorAll(".curso-card");

function filtrarCursos() {
  const categoria = categoriaSelect.value;
  const nivel = nivelSelect.value;

  cards.forEach(card => {
    const categorias = card.dataset.categoria.split(" ");
    const cardNivel = card.dataset.nivel;

    const matchCategoria = !categoria || categorias.includes(categoria);
    const matchNivel = !nivel || nivel === cardNivel;

    if (matchCategoria && matchNivel) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

categoriaSelect.addEventListener("change", filtrarCursos);
nivelSelect.addEventListener("change", filtrarCursos);
