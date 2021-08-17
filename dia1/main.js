import './style.css';

document.querySelector('#app').innerHTML = `
  <h1>O Mapa do Maroto</h1>
  <div class="mapa">
  <img src="./src/imgs/mapa_marauder_2.jpg" alt="Mapa do Salteador">
  </div>
`;

const btnLink = document.querySelector('[data-js="btnLink"]');
const appContainer = document.querySelector('#app');

btnLink.addEventListener('click', () => {
  appContainer.toggleAttribute('hidden');
  btnLink.innerHTML = appContainer.hasAttribute('hidden')
    ? 'Eu juro solenemente que não vou fazer nada de bom.'
    : 'Malfeito feito';
});
