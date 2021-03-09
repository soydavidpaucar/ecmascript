/* SPREAD OPERATOR */
const objt = {
	nombre: 'David',
	edad  : 23,
	pais  : 'EC',
};
/* EL OPERADOR SPREAD PERMITE EXTRAER LA INFORMACION DEL OBJETO EN FORMATO DE OBJETO */
let {nombre, ...todo} = objt;
console.log(todo);

/* PROPIEDADES DE PROPAGACION */
const objecto = {
	nombre: 'David',
	edad  : 23,
	pais  : 'EC',
};

const objecto1 = {
	...objecto,
	pais: 'MX',
};

console.log(objecto1);

