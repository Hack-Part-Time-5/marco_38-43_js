/* A partir de un array, escribir una función que encuentre el único elemento distinto.
Ejemplo [5, 5, 5, 5, 4, 5, 5] = 4, [2, 2, 2, 2, 3, 2, 2, 2, 2] = 3 */

function unico (num) {
    num.sort((a , b) => a - b)
    console.log(num) // [2, 2, 2, 2, 2, 2, 2, 2, 8]
    if (num[0] === num[1]) { 
        // Si el indice 0 del array num es igual al indice 1 de num, me devuelves el ultimo numero del array num.pop()
        return num.pop()
    } else {
        // Y sino me devuelves el indice 0 de num
        return num[0]
    }
}

console.log(unico([2, 2, 2, 2, 8, 2, 2, 2, 2])) 


