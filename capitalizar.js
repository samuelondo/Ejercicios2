let palabra = prompt("ingrese una palabra")
function capitalizarPalabra(palabra){
    let capitalizar = []
    capitalizar.push(palabra)
    for (let i = 0; i <= capitalizar.length; i++) {
        if(capitalizar[i] = capitalizar[0]){
            capitalizar[0].toUpperCase();
        }else{
            capitalizar[i].toLowerCase()
        }
    }
    for (let i = 0; i <= capitalizar.length; i++) {
        console.log(capitalizar[i])
    }
}

capitalizarPalabra(palabra)

