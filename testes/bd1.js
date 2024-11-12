const nome = document.getElementById("nomecliente");
const quantidade = document.getElementById("quantidadesapato");
const divSaida1 = document.getElementById("Saida1");
const divSaida2 = document.getElementById("Saida2");
const divSaida3 = document.getElementById("Saida3");
const divSaida4 = document.getElementById("Saida4");
const divSaida5 = document.getElementById("Saida5");
const divSaida6 = document.getElementById("Saida6");
const divFuncMes = document.getElementById("fun_mes");
const botaocontinue = document.getElementById("botao");

let vendasPorFuncionario = {}; // Objeto para armazenar vendas por funcionário

botaocontinue.onclick = calcularComissao;

function calcularComissao() {
    const comissao = Number(quantidade.value);
    const salarioBase = 1759;

    // Verifica se a entrada é um número válido e não negativo
    if (isNaN(comissao) || comissao <= 0) {
        divSaida1.innerText = "Não foi vendido nenhum produto Wishin este mês, portanto seu salário será de R$1439,00. Não receberá comissão.";
        return;
    }

    let taxaComissao;
    if (comissao <= 17) {
        taxaComissao = 0.05;
    } else if (comissao <= 25) {
        taxaComissao = 0.10;
    } else if (comissao <= 50) {
        taxaComissao = 0.16;
    } else {
        taxaComissao = 0.21; // Define a taxa de 21% para mais de 50 vendas
    }

    const comissaoValor = taxaComissao * salarioBase;
    const salarioFinal = comissaoValor + salarioBase;

    // Exibe a mensagem de acordo com a quantidade de vendas
    if (comissao > 50) {
        divSaida1.innerText = O funcionário vendeu este mês ${comissao} sapatos, a comissão é de ${(taxaComissao * 100).toFixed(0)}%. Ele ganhará R$${salarioFinal.toFixed(2)} com 21% de comissão.;
    } else {
        divSaida1.innerText = O funcionário vendeu este mês ${comissao} sapatos, a comissão é de ${(taxaComissao * 100).toFixed(0)}%. Ele receberá R$${salarioFinal.toFixed(2)};
    }

    const nomeCliente = nome.value; // Corrigi para obter o valor do campo
    const salarioClientes = {
        "Mauricio": divSaida2,
        "Bruce": divSaida3,
        "Beatriz": divSaida4,
        "Luccas": divSaida5,
        "Esther": divSaida6
    };

    if (salarioClientes[nomeCliente]) {
        salarioClientes[nomeCliente].innerText = R$ ${salarioFinal.toFixed(2)};
    }

    // Atualiza as vendas do funcionário
    if (!vendasPorFuncionario[nomeCliente]) {
        vendasPorFuncionario[nomeCliente] = 0;
    }
    vendasPorFuncionario[nomeCliente] += comissao;

    // Verifica quem vendeu mais
    let funcionarioMaisVendeu = '';
    let maxVendas = 0;

    for (const funcionario in vendasPorFuncionario) {
        if (vendasPorFuncionario[funcionario] > maxVendas) {
            maxVendas = vendasPorFuncionario[funcionario];
            funcionarioMaisVendeu = funcionario;
        }
    }

    // Atualiza o h3 com o nome do funcionário que mais vendeu
    divFuncMes.innerText = O funcionario do mês é ${funcionarioMaisVendeu} com ${maxVendas} vendas
}