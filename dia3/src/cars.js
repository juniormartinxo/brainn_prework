const tbodyCars = document.querySelector('[data-js="tbodyCars"]');
const formCarro = document.querySelector('[data-js="formCarro"]');
const btnCadastrarCarro = document.querySelector(
  '[data-js="btnCadastrarCarro"]'
);
const inputCarroUrlImage = document.querySelector(
  '[data-js="inputCarroUrlImage"]'
);
const inputCarroMarcaModelo = document.querySelector(
  '[data-js="inputCarroMarcaModelo"]'
);
const inputCarroAno = document.querySelector('[data-js="inputCarroAno"]');
const inputCarroPlaca = document.querySelector('[data-js="inputCarroPlaca"]');
const inputCarroCor = document.querySelector('[data-js="inputCarroCor"]');

btnCadastrarCarro.addEventListener('click', () => {
  const tbodyCarsHtml = tbodyCars.innerHTML;

  tbodyCars.innerHTML =
    `<tr>
        <td>
            ${inputCarroUrlImage.value}
        </td>
        <td>
            ${inputCarroMarcaModelo.value}
        </td>
        <td>
            ${inputCarroAno.value}
        </td>
        <td>
            ${inputCarroPlaca.value}
        </td>
        <td>
            ${inputCarroCor.value}
        </td>
        </tr>` + tbodyCarsHtml;

  formCarro.reset();
});
