/* 
+La primera función se llamará doble. Esta recibirá un número y retornará el doble.
+La segunda función se llamará triple. Esta recibirá un número y retornará el triple.
+La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. Esta retornará el valor de aplicar dicha función al valor que recibió. */

function doble(n) {
    return n*2 ;   
}

function triple(n) {
    return n * 3;
}

function aplicarCallback(n, callback) {
    return callback(n);    
}

console.log(aplicarCallback(2, doble));
console.log(aplicarCallback(4, triple));

/* Creemos cuatro funciones que realicen las operaciones principales de una calculadora. Nuestro trabajo será definir la función suma, resta, multiplicacion y division. Cada una de ellas recibirá dos parámetros y deberá realizar la operación matemática según corresponda. Por ejemplo, la función suma deberá retornar la suma de ambos parámetros; la función resta, la resta de ambos parámetros, y así sucesivamente.
Ahora sí, con esas funciones ya definidas, creemos la función calculadora. Esta función recibirá dos parámetros numéricos y una función, que será nuestro callback.
 */

function suma(n,n1) {
    return n+n1;
}

function resta(n,n1) {
    return n-n1;
}

function multiplicacion(n, n1) {
    return n *n1;    
}

function division(n, n1) {
    return n/n1; 
}

function calculadora(n, n1, callback) {
    return callback(n,n1);    
}
console.log('la suma es: ' + calculadora(5,6,suma));
console.log('la resta es: ' + calculadora(5,6,resta));
console.log('la multiplicacion es: ' + calculadora(5,6,multiplicacion));
console.log('la division es: ' + calculadora(5,6,division));

/*
Para esto debemos completar la función procesar. Esta recibe dos parámetros:
1. El primer parámetro es un array.
2. El segundo parámetro que recibe es una función (al que solemos llamar callback).
La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada a un elemento del array pasado.
Dejamos unas funciones para comprender y probar con el ejemplo:

  let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
  console.log(urlCompletas); // imprime [ 'http://www.google.com', 'http://www.yahoo.com' ]
  let largoDeElmentos = procesar(["www.google.com","www.yahoo.com"],largoString)
  console.log(largoDeElmentos); // imprime [ 14, 13 ]  
   
  PENDIENTE*/

  function agregarHttp(url) {
    return url;
}

function procesar(url,callback){
    for (let i = 1; i <= url.length ; i++){
        return callback(url[i]);
    }
    
}

agregarHttp("www.google.com")
procesar(["www.google.com","www.yahoo.com"]);