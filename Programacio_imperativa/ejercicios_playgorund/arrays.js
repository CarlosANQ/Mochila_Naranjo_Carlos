let notas = [3, 5, 10, 9, 7, 8, 8, 8]; //manera como se escriben los arrays

// .push() and .pop()
console.log('ejemplo de .pop y .push');
notas.push(6); // .push Se utiliza para agregar de manera secuencia  elementos al array
notas.push(2)
let ultimoElemento = notas.pop(); // .pop quita el ultimo elemento agregado
console.log(notas);
console.log(ultimoElemento);

// .shift() and .unshift()
console.log('ejemplo .shift y .u shift');
notas.shift(); // .shift() quita los primeros elementos del array
notas.unshift(1); // .unshift() agregar los elementos al principio del array
console.log(notas);

// .indexOf y .lastIndexOf() (hace lo mismo que el indexOf pero comienza analizando del final al inicio)
console.log('utilizando la instruccion .indexOf');
let colores=['rojo', 'verde', 'amarillo', 'morado']
let ubicacion=colores.indexOf('verde')// .indexOf indica en donde esta ubicado el array que estas buscando, 
let ubicacion_Dos=colores.indexOf('purpura');  //si no se llega a encontrar el elemtno dentro del array va arrijar -1
console.log('esta en la posicion ', ubicacion);
console.log(ubicacion_Dos, 'no se encontro el elemento');

//.join()
console.log('Imprimiendo todos los elementos con .join()');
let frase = ['WHERE', 'IS', 'THE', 'LIMIT', '?']
let frase_Final=frase.join(' '); //.join() nos ayuda a imprimir todos los elementos del array separandolo mediante el caracter que se le indique ejemplo: espacio, coma, asterisco, guion etc
console.log(frase_Final);

// .includes()
console.log('Utilizando el metodo .inludes()');
let profesor1=['esteban', 29, 'profesor', 'programacion imperativa']
console.log(profesor1);
console.log(profesor1.includes('esteban')); // analiza si se encuentra dentro del array y retorna un true o false




