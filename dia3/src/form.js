const inputName = document.querySelector('[data-js="inputName"]');

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
