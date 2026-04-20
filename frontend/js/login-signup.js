document.addEventListener("DOMContentLoaded", () => {

  const modalEntrar   = document.getElementById("modalEntrar");
  const modalCadastro = document.getElementById("modalCadastro");

  // Abre modal de login ao clicar em "Comece a Aprender"
  document.querySelector(".btn-acao")
    ?.addEventListener("click", () => modalEntrar?.showModal());

  // Login → Cadastro
  document.querySelector(".link-cadastro")
    ?.addEventListener("click", () => {
      modalEntrar?.close();
      modalCadastro?.showModal();
    });

  // Cadastro → Login
  document.querySelector(".link-entrar")
    ?.addEventListener("click", () => {
      modalCadastro?.close();
      modalEntrar?.showModal();
    });

  // Fechar clicando fora (backdrop)
  [modalEntrar, modalCadastro].forEach(modal => {
    modal?.addEventListener("click", (e) => {
      if (e.target === modal) modal.close();
    });
  });

});
