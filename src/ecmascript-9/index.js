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

/* PROMISE FINALLY */
const helloWorld = () => {
	return new Promise((resolve, reject) => {
		(true)
		? setTimeout(() => resolve('Hello World'), 3000)
		: reject(new Error('Test Error'));
	});
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'));

/* EXPRESIONES REGULARES */
/* EL PRIMER GRUPO EMPIEZA CON [] LA CANTIDAD DE ELEMENTOS A COMPARAR CON {} */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-20');
const year = match[1];//comparar de la posicion 1 de la regex
const month = match[2];//comparar de la posicion 2 de la regex
const day = match[3];//comparar de la posicion 3 de la regex

console.log(`Año ${year} del mes ${month} del dia ${day}`);