/****************************************************************
 * Seleção dos elementos HTML
 ****************************************************************/
// Botões
const btnBotoes = document.querySelectorAll("[btn-numero]");
const btnOperacoes = document.querySelectorAll("[btn-operador]");
const btnIgual = document.querySelector("[btn-igual]");
const btnDelete = document.querySelector("[btn-delete]");
const btnAC = document.querySelector("[btn-ac]");

// As divs que vão exibir os valores da calculadora
const bufferElemento = document.querySelector("[txt-buffer]");
const displayElemento = document.querySelector("[txt-display]");

// Objeto que irá representar e armazenar os dados da calculadora
const calculadora = {
  operandoAnterior: "",
  operandoAtual: "",
  operador: "",
  bufferTextoElemento: bufferElemento, // DIV buffer
  displayTextoElemento: displayElemento, // DIV display
};

/****************************************************************
 * Associar funções aos eventos dos elementos HTML
 ****************************************************************/
// Botão AC
btnAC.addEventListener("click", () => {
  limpaVariaveis(calculadora);
});

// Botão Delete
btnDelete.addEventListener("click", () => {
  apagaDigito(calculadora);
});

// Botão de igual
btnIgual.addEventListener("click", () => {
  executaCalculo(calculadora);
});

// Botões dos números
btnBotoes.forEach(btn => {
  btn.addEventListener("click", () => {
    adicionaNumero(calculadora, btn.innerText);
  });
});

// Botões dos operadores
btnOperacoes.forEach(btn => {
  btn.addEventListener("click", () => {
    escolheOperador(calculadora, btn.innerText);
  });
});

/****************************************************************
 * Regras da aplicação
 ****************************************************************/

/**
 * Atualiza o display da calculadora.
 * Atualiza buffer (operandoAnterior + operador) e display (operandoAtual).
 */
function atualizaDisplay({ operandoAnterior, operandoAtual, operador, bufferTextoElemento, displayTextoElemento }) {
  bufferTextoElemento.innerText = operandoAnterior + (operador || '');
  displayTextoElemento.innerText = operandoAtual;
}

/**
 * Limpa os atributos do objeto calculadora e atualiza o display.
 */
function limpaVariaveis(calc) {
  calc.operandoAnterior = '';
  calc.operandoAtual = '';
  calc.operador = '';
  atualizaDisplay(calc);
}

/**
 * Adiciona um dígito ao operandoAtual e atualiza o display.
 * Impede múltiplos pontos decimais.
 */
function adicionaNumero(calc, numero) {
  if (numero === '.' && calc.operandoAtual.includes('.')) return;
  calc.operandoAtual = calc.operandoAtual.toString() + numero.toString();
  atualizaDisplay(calc);
}

/**
 * Seleciona o operador; se já houver operandoAnterior e operandoAtual, calcula antes.
 */
function escolheOperador(calc, operador) {
  if (calc.operandoAtual === '') return;
  if (calc.operandoAnterior !== '') {
    executaCalculo(calc);
  }
  calc.operador = operador;
  calc.operandoAnterior = calc.operandoAtual;
  calc.operandoAtual = '';
  atualizaDisplay(calc);
}

/**
 * Executa o cálculo baseado nos operandos e no operador.
 */
function executaCalculo(calc) {
  const anterior = parseFloat(calc.operandoAnterior);
  const atual = parseFloat(calc.operandoAtual);
  if (isNaN(anterior) || isNaN(atual)) return;
  let resultado;
  switch (calc.operador) {
    case '+':
      resultado = anterior + atual;
      break;
    case '-':
      resultado = anterior - atual;
      break;
    case '*':
      resultado = anterior * atual;
      break;
    case '÷':
      resultado = anterior / atual;
      break;
    default:
      return;
  }
  calc.operandoAtual = resultado.toString();
  calc.operandoAnterior = '';
  calc.operador = '';
  atualizaDisplay(calc);
}

/**
 * Apaga o último dígito de operandoAtual e atualiza o display.
 */
function apagaDigito(calc) {
  calc.operandoAtual = calc.operandoAtual.toString().slice(0, -1);
  atualizaDisplay(calc);
}

// Inicializa display vazio
limpaVariaveis(calculadora);
