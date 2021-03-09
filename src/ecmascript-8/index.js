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

