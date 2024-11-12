function somaSerie(cont){
    let x = 1
    let y = 1
    let z = 0
    let r = 0
    let resp = 0
    while (z < cont) {
        
        r = x * y 
        x += 1 
        y += 2
       
        resp += r
        console.log(r)
        console.log("+")
    }
    console.log("="+resp )

}
console.log(somaSerie(4))

//console.log(somaSerie(3)) // 1 + 6 + 15 = 22
//console.log(somaSerie(4)) // 1 + 6 + 15 + 49 = 71