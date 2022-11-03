/* Calcular la media de la puntuación de un partido de bowling.
- La máquina pone números negativos y queremos eliminarlos,
- haciendo la media solo de los números positivos. */

const puntFinal = [10, 8, 30, 7, -5, -7, 10, 30, -2]
let sinNegativos = []
let media = 0

function resultado () {
    sinNegativos = puntFinal.filter(el => el >= 0)
    console.log(sinNegativos)
    media = sinNegativos.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
    media = (media / sinNegativos.length).toFixed(1)
    console.log(media)
}

resultado()



