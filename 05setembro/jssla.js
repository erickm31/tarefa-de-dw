function calculamulta(){

    let inputvelomaxvia = document.getElementById("velomaxvia")
    let inputvelocar = document.getElementById("velocar")
    let divSaida = document.getElementById("saida")

    let velomaxvia = Number(inputvelomaxvia.value)
    let velocar = Number(inputvelocar.value)

    let porcentagem = ((velocar - velomaxvia)/velomaxvia)*100


    if (velomaxvia >= velocar){
        divSaida.innerText = ' não tem multa'
    }

    else if (velomaxvia + velomaxvia * 0.2 >= velocar)
        {divSaida.innerText = 'sua velocidade excedeu ' + porcentagem + '% da velocidade maxima. multa de R$130,16';}

    else if (velomaxvia + velomaxvia * 0.2 < velocar && velomaxvia + velomaxvia * 0.5 >= velocar)
        {divSaida.innerText = 'sua velocidade excedeu ' + porcentagem + '% da velocidade maxima. Multa de R$ 195,23';}

    else{
        divSaida.innerText = 'sua velocidade excedeu ' + porcentagem + '% da velocidade maxima. multa de R$ 880,41';}
    
}