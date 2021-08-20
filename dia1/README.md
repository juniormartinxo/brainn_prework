<h2><img src="https://user-images.githubusercontent.com/4163340/130160199-7b021ab6-8d96-4955-b41c-4506968afe98.png"/> Dia 01 [2021-08-16 - Segunda]</h2>
<p>No primeiro dia do Pré-work o professor Fernando Daciuk falou dos pré-requisitos necessárias para acompanhamento do pré-work, sendo:</p>
<ul>
  <li>[x] 01 (um) editor de texto | <strong>Escolhido:</strong> VSCode </li>
  <li>[x] NVM e NodeJS</li>
  <li>[x] Eslint</li>
  <li>[x] Editorconfig</li>
  <li>[x] Emmet</li>
  <li>[x] Yarn</li>  
</ul>
<h4>Para usuários Windows:</h4>
<ul>
  <li>[x] WSL com Ubuntu</li>
</ul>
<h3>Instalação ViteJS</h3>

```
yarn create vite
```

### Criar projeto com o Vite

```
yarn create vite dia1
```

### 

# <img src="https://user-images.githubusercontent.com/4163340/130159194-488e54e5-a6e0-49d1-9b9c-7b78d232ba70.png" height="32"/> Desafio do dia 01

<p>🔗 <a href="https://github.com/brainnco/desafios-pre-work-b-academy/tree/main/dia1">Link para o desafio do dia 01</a></p>

<p>No primeiro dia fomos desafiados a resolver dois erros, onde um era devido a inexistência do arquivo main.js e o outro a falta do atributo "type" na tag script do arquivo index.html.</P>

### Solução dos erros

### <img src="https://user-images.githubusercontent.com/4163340/130161271-0e37ced9-4426-4f4b-9dac-510916ffad4d.png" height="16"/> Exercício 01
<details>
<p>Resolver o erro que aparece no console:</p>

```
GET http://localhost:3000/main.js net::ERR_ABORTED 404 (Not Found)
```

<p>Para solucionar o erro bastava criar o arquivo main.js</p>
</details>

### <img src="https://user-images.githubusercontent.com/4163340/130161271-0e37ced9-4426-4f4b-9dac-510916ffad4d.png" height="16"/> Exercício 02
<details>
<p>Ao resolver o primeiro erro, resolva o segundo erro que deverá aparecer no console:</p>

```
Uncaught SyntaxError: Cannot use import statement outside a module
```

<p>Para solucionar o erro basta inserir o atributo type="module" na tag <script/></p>
</details>

### <img src="https://user-images.githubusercontent.com/4163340/130161271-0e37ced9-4426-4f4b-9dac-510916ffad4d.png" height="16"/> Exercício 03
<details>
<p>Olhe novamente para o console, e resolva o próximo erro:</p>

```
main.js:3 Uncaught TypeError: Cannot set property 'innerHTML' of null
```

<p>Para solucionar bastava ou criar a div #app ou colocar o ID app em alguma div.</p>
</details>

### <img src="https://user-images.githubusercontent.com/4163340/130161271-0e37ced9-4426-4f4b-9dac-510916ffad4d.png" height="16"/> Exercício 04
<details>
<p>Crie um link no HTML (fora da div .app), e adicione à ele um evento de clique. O clique nesse botão deverá alternar a visibilidade do .app: se o .app estiver visível, ele deverá ser escondido. Se estiver escondido, o clique deve exibí-lo.</p>

<p>Para facilitar a visualização, minha filha me deu a ideia que eu implementasse o feitiço do Mapa do Maroto do filme Harry Potter e o Prisioneiro de Askaban, que ficou conforme as imagens abaixo, para implementar adicionei um addEventListener no botão e toggleAttribute na div#app:</p>

```
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
```
</details>

### Com a div #app desabilitada:

![image](https://user-images.githubusercontent.com/4163340/129776083-e807baaf-c270-4fe8-adc4-3cbac6c172d9.png)

### Com a div #app habilitada:

![image](https://user-images.githubusercontent.com/4163340/129776949-cfdf8256-6d8d-48ec-b096-2ef2fb2271b4.png)
