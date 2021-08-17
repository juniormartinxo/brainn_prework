import './style.css';

document.querySelector('#app').innerHTML = `
  <div class="mapa">
  <h1>O Mapa do Maroto</h1>
  <img src="./src/imgs/mapa_maroto.jpg" alt="Mapa do Salteador">
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
