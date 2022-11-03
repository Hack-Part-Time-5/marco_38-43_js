/* A partir de un array, devuelve otro array con las primeras 3 letras por cada elemento del array inicial.
Ejemplo const días = ['Lunes', 'Martes', 'Miércoles',
'Jueves', 'Viernes', 'Sábado', 'Domingo'];

Resultado = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sab', 'Dom'] */


const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const mesesTres = meses.map(el => el.slice(0, 3))
console.log(mesesTres)
