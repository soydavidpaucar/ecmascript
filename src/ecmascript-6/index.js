/* FUNCION CON PARAMETROS POR DEFECTO ANTES DE ES6 */
function newFunction(name, age, country) {
	var name = name || 'David';
	var age = age || 23;
	var country = country || 'EC';
	console.log(name, age, country);
}

/* FUNCION CON PARAMETROS POR DEFECTO EN ES6 */
function newFunction2(name = 'David', age = 23, country = 'EC') {
	console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');

/* TEMPLATE LITERALS ANTES DE ES6 */
let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;

console.log(epicPhrase);

/* TEMPLATE LITERALS EN ES6 */
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


/* SALTO DE LÍNEA ANTES DE ES6 */
let lorem = 'lorem ipsum dolor sieta tem\n' + 'lorem ipsum dolo siet atem';
console.log(lorem);

/* SALTO DE LÍNEA EN ES6 */
let lorem2 = `lorem ipsum dolor sieta tem
lorem ipsum dolor sieta tem`;
console.log(lorem2);

/* DESESTRUCTURAR OBJETOS ANTES DE ES6 */
let person = {
	'name': 'David',
	'edad': 23,
	'pais': 'Ecuador',
};
console.log(person.name, person.edad, person.pais);

/* DESESTRUCTURAR OBJETOS EN ES6 */
const {name, edad, pais} = person;
console.log(name, edad, pais);

/* SPREAD OPERATOR U OPERADOR DE PROPAGACION EN ES6 */
let team1 = ['Oscar', 'Julia', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

/* VARIABLES */
{
	/* VAR ES ACCESIBLE GLOBALMENTE AUN ASI ESTE EN UN BLOQUE */
	var globalVar = 'Global Var';
}

{
	/* LET ES ACCESIBLE UNICAMENTE DENTRO DEL BLOQUE DONDE SE CREO */
	let globalLet = 'Global Let';
	console.log(globalLet); //Global Let
}

console.log(globalVar); // Global Var
/*console.log(globalLet);*/ //globalLet is not defined

/* AL SER UNA CONSTANTE NO PUDE SER MODIFICADO SU VALOR */
const a = 'b';
/*a = 'a';*/ //no se puede
console.log(a); //b


/* PROPIEDADES DE OBJETOS ANTES DE ES6 */
let nombre = 'David';
let edad = 23;

obj = {nombre: nombre, edad: edad};

/* PROPIEDADES DE OBJETOS A PARTIR DE ES6 */
obj2 = {nombre, edad};
console.log(obj2);