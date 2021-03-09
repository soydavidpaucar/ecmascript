/* OBJECT ENTRIES, DEVUELVE LOS VALORES DE UNA MATRIZ */
const data = {
	frontend: 'David',
	backend : 'Isabel',
	design  : 'Ana',
};
/* CONVIERTE EL OBJETO EN UNA MATRIZ */
const entries = Object.entries(data);
console.log(entries);
/* VERIFICA CUANTOS ELEMENTOS HAY EN LA MATRIZ */
console.log(entries.length);

/* OBJECT VALUES, DEVUELVE LOS VALORES DE UN OBJETO A UN ARREGLO */
const datos = {
	frontend: 'David',
	backend : 'Isabel',
	design  : 'Ana',
};
const valores = Object.values(datos);
console.log(valores);
/* DEVUELVE LA CANTIDAD DE ELEMENTOS DEL ARREGLO */
console.log(valores.length);

/* PADDING */
/* NOS PERMITE AÑADIR CADENAS VACÍAS A STRING, PUDIENDO MODIFICAR LA CADENA STRING COMO TAL. */
const string = 'hello';
console.log(string.padStart(7, 'hi')); //se añade al inicio de la palabra
console.log(string.padEnd(7, 'hi')); //se añade al final de la palabra

