function devolva(x,y,z){
if (x < y && x < z){
    console.log(x)
} else if  ( y < x && y < z){
    console.log(y)
} else{
    console.log(z)
}
}

console.log(devolva(8,7,8))
