/* Generando un array de números aleatorios dado un mínimo y un máximo,
filtramos sólo los números pares,
duplicamos los números obtenidos y sumamos 10,
filtramos estos números para valores mayores de 10 y menos
de 100
y hacemos la suma final. */

const arrAle = [];
let soloPares = []

function alefunc () { 
   while (arrAle.length < 8) {
        arrAle.push(Math.floor(Math.random() * (100 - 1 + 1) + 1))  
   }
   console.log(arrAle)
   soloPares = arrAle.filter(el => el %2 ==0 && el > 10 && el < 100).reduce((acumulator, curruentValue) => acumulator + curruentValue, 0 )
   console.log(soloPares)
   
   
}
alefunc()
