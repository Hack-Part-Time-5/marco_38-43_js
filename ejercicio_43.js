/* A partir de un array, escribir una función que encuentre el único elemento distinto.
Ejemplo [5, 5, 5, 5, 4, 5, 5] = 4, [2, 2, 2, 2, 3, 2, 2, 2, 2] = 3 */

function unico (num) {
    let resultado = num.filter(el => el !== num[0])
    return resultado

}
console.log(unico([2, 2, 2, 2, 7, 2, 2, 2, 2])) 

