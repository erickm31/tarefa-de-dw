let condicao1 = true;
let condicao2 = true;
let condicao3 = false;
let condicao4 = false;
let condicao5 = true;
let condicao6 = false;
let condicao7 = true;
let condicao8 = false;

if(condicao1 == true){
    if (condicao2 == true){
        if(condicao5 == false){
            console.log("I")
        }else {
            console.log("H")
        }
    }else {
        if(condicao3 == false){
            console.log("G")
        }else {
            if(condicao4 == false){
                console.log("F")
            }else{console.log("E")}
        }
    }
}else {
    if(condicao6 == false){
        console.log("A")
    }else{
        if(condicao7 == true){
            console.log("B")
        }else{
            if(condicao8 == true){
                console.log("C")
            }else{
                console.log("D")
            }
        }
    }
}