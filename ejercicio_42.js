/* A partir de 2 arrays, compararlos y devolver un array sin duplicados a través de una función.
Ejemplo a = [1, 2, 3, 4], b = [1, 2]
Resultado = [3, 4]; */

let arr1 = [1, 2, 3, 4];
let arr2 = [1, 2];
let resultado = [];


function twoArr () {
    resultado = arr1.filter(el => !arr2.includes(el))
    return console.log(resultado)
}
twoArr()


// Ahorrando codigo---------------------------------------------

function difArray(arr1, arr2) {
    let filtrar = arr1.filter(el => !arr2.includes(el))
    return filtrar
}

console.log(difArray([6, 7, 8, 9], [6, 7]))




