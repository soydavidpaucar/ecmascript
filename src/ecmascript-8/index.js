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

