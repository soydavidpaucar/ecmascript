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