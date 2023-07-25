let num = prompt("Ingrese el numero");
let numeros = [5, 7, 12, 34, 54, 2];
let resultado = 0 ;
function indice(num, numeros, resultado){
    for(i=0; i <= numeros.length; i++){
        if (numeros[i]== num){
            resultado = i;
            alert("La posicion de su numero es "+ resultado);
        }else{
            alert("La posicion es "+ -1);
            break;
        };
    };
};
indice(num, numeros, resultado);