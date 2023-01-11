const btnWeb = document.getElementById("btn-web");
const btnCm = document.getElementById("btn-cm");
const portafolioModalWeb = document.getElementById("portafolio-modal-web");
const portafolioModalCm = document.getElementById("portafolio-modal-cm");

export function portafolioModalOne() {
  return btnWeb.addEventListener("click", () => {
    portafolioModalWeb.classList.remove("portafolio__modal--out");
    portafolioModalCm.classList.add("portafolio__modal--out");
    btnWeb.classList.add("btn--red");
    btnCm.classList.remove("btn--red");
  });
}

export function portafolioModalTwo() {
  return btnCm.addEventListener("click", () => {
    portafolioModalCm.classList.remove("portafolio__modal--out");
    portafolioModalWeb.classList.add("portafolio__modal--out");
    btnWeb.classList.remove("btn--red");
    btnCm.classList.add("btn--red");
  });
}

//portafolio-modal-web
