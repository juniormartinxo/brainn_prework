import './form.js';
import '../style.css';

document.querySelector('.app').innerHTML = `
  <h1>Meu formulário</h1>
  <form action="post">
      <div class="form-container">
        <label for="">Nome</label>
        <input type="text" data-js="name" />
      </div>
    </form>
`;
