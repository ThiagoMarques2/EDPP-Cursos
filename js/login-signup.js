document.addEventListener("DOMContentLoaded", () => {

  const loginDiv = document.getElementById("loginDiv");
  const createDiv = document.getElementById("createAccountDiv");

  const openLogin = document.querySelector(".cta-btn");
  const goToCreate = document.querySelector(".create-account-link");
  const goToLogin = document.querySelector(".open-login");

  // abre login
  if (openLogin && loginDiv) {
    openLogin.addEventListener("click", () => {
      loginDiv.style.display = "flex";
    });
  }

  // fechar login
  if (loginDiv) {
    loginDiv.addEventListener("click", (e) => {
      if (e.target === loginDiv) {
        loginDiv.style.display = "none";
      }
    });
  }

  // fechar cadastro
  if (createDiv) {
    createDiv.addEventListener("click", (e) => {
      if (e.target === createDiv) {
        createDiv.style.display = "none";
      }
    });
  }

  // login -> cadastro
  if (goToCreate && loginDiv && createDiv) {
    goToCreate.addEventListener("click", () => {
      loginDiv.style.display = "none";
      createDiv.style.display = "flex";
    });
  }

  // cadastro -> login
  if (goToLogin && loginDiv && createDiv) {
    goToLogin.addEventListener("click", () => {
      createDiv.style.display = "none";
      loginDiv.style.display = "flex";
    });
  }

});