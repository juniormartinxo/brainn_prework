import "./style.css";

const btnLink = document.querySelector('[data-js="btnLink"]');
const appContainer = document.querySelector(".app");

appContainer.innerHTML = `
  <div class="mapa">
    <h1>O Mapa do Maroto</h1>
    <img src="./src/imgs/mapa_maroto.jpg" alt="Mapa do Salteador">
  </div>
`;

/**
 * Solução do professor
 *
 * Trocamos a função toggleAttribute por toggle do classList
 */
btnLink.addEventListener("click", (e) => {
  e.preventDefault();
  appContainer.classList.toggle("hide");
  btnLink.textContent = appContainer.classList.contains("hide")
    ? "Eu juro solenemente que não vou fazer nada de bom."
    : "Malfeito feito";
});
