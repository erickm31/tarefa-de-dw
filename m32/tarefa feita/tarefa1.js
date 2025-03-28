function calcularjuros(){

    let inputcapital = document.getElementById("capital")
    let inputjuros = document.getElementById("juros")
    let inputperiodo = document.getElementById("periodo")
    let divSaida = document.getElementById("saida")

    let c = Number(inputcapital.value)
    let j = Number(inputjuros.value)
    let p = Number(inputperiodo.value)

    let montante = c * (1 + j)**p

    divSaida.innerText = montante
}
let botao = document.getElementById("montante")


