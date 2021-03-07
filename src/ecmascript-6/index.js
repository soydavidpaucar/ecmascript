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

