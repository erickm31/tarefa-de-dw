 //1-----------------------------------
 function sumArray(arr){
    let soma = 0
    for (let i = 0; i < arr.length; i++){
        soma +=arr[i]
    }
    return soma
 }

//console.log(sumArray([1, 2, 10])); // Deve exibir: 10
 
 //2 --------------------------------------------

 function findMax(arr){
    let maior = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maior) {
            maior = arr[i];
        }
    }
    return maior;
 }
//console.log(findMax([1, 2, 3, 4, 5])); // Deve exibir: 5


//3--------------------------------------------------


function countOccurrences(arr, elemento){
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) {
            contador++;
        }
    }
    return contador;
}
//console.log(countOccurrences([1, 2, 2, 3, 2], 2)); // Deve exibir: 3
//console.log(countOccurrences(["apple", "banana", "apple"], "apple")); // Deve exibir: 2


//4---------------------------------------

function allEquals(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[0]) {
            return false;
        }
    }
    return true;
}
//console.log(allEquals([1, 1, 1])); // Deve exibir: true
//console.log(allEquals([1, 2, 1])); // Deve exibir: false

//5---------------------------------------
Function removeDuplicates(arr){
    let unico = []
    for (i = 0; i < arr.length; i ++){
        if( )
    }
}



//6---------------------------------------

function average(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma += arr[i];
    }
    return soma / arr.length;
}

//console.log(average([1, 2, 3, 4])); // Deve exibir: 2.5
//console.log(average([10, 20, 30])); // Deve exibir: 20

//7---------------------------------------



//8 --------------------------------------------------
function getEvenNumbers(vetor){
    let novovetor = []

    for(elemento of vetor){
        if (elemento % 2 == 0){
            novovetor.push(elemento)
        }
            
    }
    return novovetor
}
//console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Deve exibir: [2, 4, 6]

//9--------------------------------------------------

//10--------------------------------------------------