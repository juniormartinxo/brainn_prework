<h2><img src="https://user-images.githubusercontent.com/4163340/130160199-7b021ab6-8d96-4955-b41c-4506968afe98.png"/> Dia 02 [2021-08-17 - Terça]</h2>
<p>No segundo dia do Pré-work o professor Fernando Daciuk falou dos pré-requisitos necessárias para acompanhamento do pré-work, sendo:</p>

## <img src="https://user-images.githubusercontent.com/4163340/130159194-488e54e5-a6e0-49d1-9b9c-7b78d232ba70.png" height="32"/> Desafio do dia 02

<p>No segundo dia fomos desafiados a implementart uma IMUTABILIDADE e uma HOF (Higher Order Function).</P>

### <img src="https://user-images.githubusercontent.com/4163340/130161271-0e37ced9-4426-4f4b-9dac-510916ffad4d.png" height="16"/> Exercício 01

<details>
<p>Importe o arquivo <code>src/immutable.js</code> no <code>src/main.js</code>. Abra o arquivo e olhe o console do navegador. O resultado dos dois objetos deveria ser diferente. Faça a criação do segundo objeto de forma imutável.</p>
</details>

### <img src="https://user-images.githubusercontent.com/4163340/130161271-0e37ced9-4426-4f4b-9dac-510916ffad4d.png" height="16"/> Exercício 02 - HOF (Higher Order Function)

<details>
<p>Veja que, nesse arquivo, temos uma função <code>calculadora</code> sem implementação, e temos algumas variáveis que fazem a execução da calculadora. O desafio é fazer a implementação da calculadora, para que todos os valores no console resultem em <code>true</code>.</p>

<p>A implementação deve ser da seguinte forma:</p>

<ul>
  <li>A função calculadora deve receber via argumento uma função, que dirá como o cálculo vai ser feito (olhe para a linha onde foi criada a variável sum, por exemplo, para ver a função que está sendo passada para a calculadora);</li>
  <li>O retorno da função calculadora deve ser uma nova função que espera dois argumentos a e b: dois números que serão calculados usando a função que foi passada como argumento para calculadora;</li>
  <li>Essa função de retorno deve retornar a chamada da primeira função que foi passada via argumento;</li>
  <li>Os valores a e b devem ser passados como parâmetro para essa função que está sendo executada.</li>
</ul>
</details>
