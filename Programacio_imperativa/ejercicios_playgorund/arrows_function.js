// funcion arrow sin "PARAMETROS". Requiere de los parentesis para iniciarse, al tener una sola linea de codigo y que esta misma sea la que queremos retornar, el return queda implicito
console.log(' SIN PARAMETROS Y CON RETURN IMPLICITO\n');
let saludo = () => '---Hola mundo!!\n';
console.log(saludo());

// function arrow con un "UNICO PARAMETRO" (no necesitamos los parentesis, para indicarlo) y con un return implicito.
console.log(' CON UN UNICO PARAMETRO Y CON RETURN IMPLICITO\n');
let dobleDe = numero => numero * 2;
console.log('---' + dobleDe(2) + '\n');

// Function arrow con "DOS PARAMETROS", Necesita de los parentesis y tiene un return implicito (implicito:Que está incluido en algo y es innecesario explicarlo o expresarlo).
console.log(' CON DOS PARAMETROS Y CON RETURN IMPLICITO\n');
let suma = (a, b) => a+b ;
console.log('---' + suma(2,3) + '\n');

// function arrow con "PARAMETROS" y con un "RETURN EXPLICITO", en este caso hacemos usa de las llaves y del return ya que la logica de esta funcion se desarrolla en mas de una linea de codigo
console.log(' CON PARAMETROS Y CON RETURN EXPLICITO\n');
let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ' : ' + fecha.getMinutes();
}
console.log('---' + horaActual() + '\n');

// EJERCICIO EN CLASE
let FizzBuzz = (num1,num2) => {
    for (let i = 1; i <= 100; i++ ){
    if ( i % num1 == 0 && i % num2 == 0 ){
            console.log("FizzBuzz");
        }
    else if (i % num1 == 0 ){
        console.log("Fizz");
    } 
    else if (i % num2 == 0 ){
        console.log("Buzz");
    }
    else{
        console.log (i);
    }
    }
    }
    
    FizzBuzz(2,3)
    