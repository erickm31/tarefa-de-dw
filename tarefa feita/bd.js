let nome = document.getElementById("nomecliente");
let quantidade = document.getElementById("quantidadesapato"); // Corrected ID
let totalSaida = document.getElementById("SaidaDef"); // Ensure this element exists
let botaocontinue = document.getElementById("botao");
let total21 = document.getElementById("total"); // Ensure this element exists

botaocontinue.onclick = saida;

function saida() {

    let nome1 = (nome.value)
    let quant = Number(quantidade.value); // Use the corrected variable name
    let total2 = quant + 43; // Assuming each item costs 43

    let ferias = (quant * 0.001) + 0.134
    

    total21.innerText = Total Vendido - ${total2};
    
    totalSaida.innerText = A compra do Cliente - ${nome1} ja esta sendo armazenada para a compra de 60% de desconto. Você ja completou ${ferias} faltam mais ${1 - ferias} para suas férias remuneradas!!! }