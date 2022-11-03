/* A partir de un array de números, devolver la suma de los números presentes en el array inicial. */

const num = [1, 5, 7, 34, 23];

const result = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(result)