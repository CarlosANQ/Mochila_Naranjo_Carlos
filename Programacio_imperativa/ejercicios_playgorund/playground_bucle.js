//La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.
function loro(texto) {
    for (let i = 1; i <=5; i++) {
        console.log(texto);
        
    }
    
}

loro('me llamo carlos');

//En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta. Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor. Para resolver la ejercitación debemos utilizar el for .

function noParesDeContarImparesHasta(numero){
    let contador=0;
    for (let i = 0; i <= numero; i++) {
        if (i%2 == 1) {
            contador += 1;
        }                     
    }
    return contador;
}

console.log(noParesDeContarImparesHasta(12));

//Queremos construir una función llamada encontreUn5 que reciba un array como parámetro llamado numeros. La función deberá recorrer este array e imprimir por consola cada uno de los números. En caso de encontrar un 5, deberá cortar la ejecución e imprimir por consola el texto "Se encontró un 5!".
//Para resolver este ejercicios DEBES utilizar el do-while.
console.log('EJERCICIO ARRAY------------------------'); 
function encontreUn5(numeros) {
     let i=0;
     
     do {
        if (numeros[i]==5) {
            console.log('encontre el numero:' + numeros[i]);    
            i=9;        
        }
        console.log(numeros[i]);   
        i++;  
     } while (i <= numeros.length);     
     
 } 
 encontreUn5([1,2,3,6,4,7,12,8,9]); 
//let numeros = [1,2,3,4,5,6,7,8,9]
//console.log('longitud del array ' + numeros.length);