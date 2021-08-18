# Desafio do dia 02

<p>No segundo dia fomos desafiados a implementart uma IMUTABILIDADE e uma HOF (Higher Order Function).</P>

### Exercício 01

<p>Importe o arquivo <code>src/immutable.js</code> no <code>src/main.js</code>. Abra o arquivo e olhe o console do navegador. O resultado dos dois objetos deveria ser diferente. Faça a criação do segundo objeto de forma imutável.</p>

### Exercício 02 - HOF (Higher Order Function)

<p>Veja que, nesse arquivo, temos uma função <code>calculadora</code> sem implementação, e temos algumas variáveis que fazem a execução da calculadora. O desafio é fazer a implementação da calculadora, para que todos os valores no console resultem em <code>true</code>.</p>

<p>A implementação deve ser da seguinte forma:</p>

<ul>
  <li>A função calculadora deve receber via argumento uma função, que dirá como o cálculo vai ser feito (olhe para a linha onde foi criada a variável sum, por exemplo, para ver a função que está sendo passada para a calculadora);</li>
  <li>O retorno da função calculadora deve ser uma nova função que espera dois argumentos a e b: dois números que serão calculados usando a função que foi passada como argumento para calculadora;</li>
  <li>Essa função de retorno deve retornar a chamada da primeira função que foi passada via argumento;</li>
  <li>Os valores a e b devem ser passados como parâmetro para essa função que está sendo executada.</li>
</ul>
