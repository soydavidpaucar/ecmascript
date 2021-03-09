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


