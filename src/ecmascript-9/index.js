/* SPREAD OPERATOR */
const objt = {
	nombre: 'David',
	edad  : 23,
	pais  : 'EC',
};
/* EL OPERADOR SPREAD PERMITE EXTRAER LA INFORMACION DEL OBJETO EN FORMATO DE OBJETO */
let {nombre, ...todo} = objt;
console.log(todo);

