/* INCLUDES A PARTIR DE ES7 */
let numbers = [1, 2, 3, 7, 8];
/* LA FUNCION INCLUDES PERMITE ENCONTRAR UN ELEMENTO ESPECIFICO DENTRO DE UN ARRAY */
if (numbers.includes(7)) {
	console.log('Si Hay Un 7');
} else {
	console.log('No Se Encuentra');
}

/* ELEVAR POTENCIAS A PARTIR DE ES7 */
let base = 4;
let exponente = 3;
/* LA ELEVACION DE POTENCIAS SE LO CREA CON EL DOBLE ** */
let resultado = base ** exponente;

console.log(resultado);