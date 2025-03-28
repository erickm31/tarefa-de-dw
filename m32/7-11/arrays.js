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
function removeDuplicates(arr){
    let unico = []
    for (i = 0; i < arr.length; i ++){
        let x = true
        for (let j = 0; j < unico.length; j++){
            if (arr[i] === unico[j]){
                x = false
                break
            }
        }
        if(x){
            unico.push(arr[i])
        }
    }
    return unico
}

//console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4])); // Deve exibir: [1, 2, 3, 4]
//console.log(removeDuplicates(["apple", "apple", "banana"])); // Deve exibir: ["apple", "banana"]


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

function mergeArrays(arr1, arr2){
    let juntar = []
    for(let i = 0; i < arr1.length; i++){
        juntar.push(arr1[i])
    }
    for (let j = 0; j < arr2.length; j++){
        juntar.push(arr2[j])
    }
    return juntar
}

//console.log(mergeArrays([1, 2], [3, 4])); // Deve exibir: [1, 2, 3, 4]
//console.log(mergeArrays(["apple"], ["banana", "cherry"])); // Deve exibir: ["apple", "banana", "cherry"]


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

function reverseArray(arr){
    let reverter = []
    for ( i = arr.length - 1 ; i >= 0 ; i--){
        reverter.push(arr[i])
    }
    return reverter
}
//console.log(reverseArray([1, 2, 3, 4])); // Deve exibir: [4, 3, 2, 1]
//console.log(reverseArray(["apple", "banana"])); // Deve exibir: ["banana", "apple"]


//10--------------------------------------------------

function findIndex(arr, element){
    for ( i = 0; i < arr.length; i++){
        if (arr[i] === element){
            return i
        }
    }return -1
}

// console.log(findIndex([1, 2, 3, 4], 3)); // Deve exibir: 2
// console.log(findIndex(["apple", "banana"], "cherry")); // Deve exibir: -1