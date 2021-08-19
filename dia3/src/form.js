const inputName = document.querySelector('[data-js="inputName"]');
const formContainer = document.querySelector('[data-js="formContainer"]');
const selectCores = document.createElement('select');
const boxes = document.querySelector('.boxes');

// valor desse input, fazendo com que, enquanto o valor está sendo digitado, o primeiro caractere de cada palavra seja uma letra maiúscula, a menos que as palavra sejam "de", "da", "do" ou "dos". Todas as outras letras devem ser minúsculas.
function corrigirNome(str) {
  const palavras = str.split(' ');

  let palavrasCorrigidas = palavras.map(palavra => {
    if (
      palavra === 'De' ||
      palavra === 'Da' ||
      palavra === 'Do' ||
      palavra === 'Dos' ||
      palavra === 'de' ||
      palavra === 'da' ||
      palavra === 'do' ||
      palavra === 'dos'
    ) {
      return palavra.toLowerCase();
    } else {
      return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
    }
  });

  return palavrasCorrigidas.join(' ');
}

inputName.addEventListener('keyup', () => {
  inputName.value = corrigirNome(inputName.value);
});

selectCores.innerHTML = `
    <option value="">Selecione uma cor</option>
    <option value="blue">Azul</option>
    <option value="green">Verde</option>
    <option value="red">Vermelho</option>
    <option value="yellow">Amarelo</option>
    <option value="MidnightBlue">Roxo</option>
`;

document.body.insertBefore(selectCores, formContainer);

selectCores.addEventListener('change', () => {
  const boxCor = document.createElement('div');
  const cor = selectCores.value;

  boxCor.style.backgroundColor = cor;
  boxCor.style.width = '100px';
  boxCor.style.height = '100px';
  boxCor.style.margin = '10px';
  boxCor.style.borderRadius = '10px';
  boxCor.style.display = 'inline-block';

  document.body.insertBefore(boxCor, boxes);
});
