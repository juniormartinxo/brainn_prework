import "./style.css";

document.querySelector(".app").innerHTML = `
  <div class="mapa">
    <h1>O Mapa do Maroto</h1>
    <img src="./src/imgs/mapa_maroto.jpg" alt="Mapa do Salteador">
  </div>
`;

const btnLink = document.querySelector('[data-js="btnLink"]');
const appContainer = document.querySelector(".app");

/**
 * Minha solução
 *
 * Segundo o professor Fernando Daciuk não realizei a melhor abordagem, tendo em vista que
 * deve se evitar ao máximo a utilização de propriedades do HTML para se fazer estilização.
 * O correto seria alterar o CSS através do classList do elemento.
 */
btnLink.addEventListener("click", () => {
  appContainer.toggleAttribute("hidden");
  btnLink.innerHTML = appContainer.hasAttribute("hidden")
    ? "Eu juro solenemente que não vou fazer nada de bom."
    : "Malfeito feito";
});
