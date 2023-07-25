let palabra = prompt("ingrese una palabra")
function crearCuentaRegresiva(numero){
    let array = []

    for (let i = 0; i < numero; i++){

        array.push(i)
    }
    array.reverse()
    return array
}

alert(crearCuentaRegresiva(5).join(' '))