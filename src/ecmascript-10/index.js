/* FLAT EN ARRAYS */
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];
/* GENERACION DE UNA NUEVA MATRIZ DEPENDIENDO DE LA PROFUNDIDAD DE LOS SUBNIVELES DEL ARRAY */
console.log(array.flat(2));

/* FLAT MAP */
let arreglo = [1, 2, 3, 4, 5];
/* MAPEAR CADA ELEMENTO, LUEGO PASARLE UNA FUNCION Y APLANAR */
console.log(arreglo.flatMap(value => [value, value * 2]));

