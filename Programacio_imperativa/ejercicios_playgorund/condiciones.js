//ejercicio 1, Declaremos una variable con el nombre dato y asignémosle un valor booleano.
//Luego, deberemos hacer un if que evalúe esa variable y, si el valor es igual a  true, 
//que imprima por consola "es true". Caso contrario, que imprima por consola "es false".
let dato=false;
if (dato == true) {
    console.log('es true');    
}else{
    console.log('es false');
}

//En este ejercicio nos viene dada una variable llamada lenguaje, que tiene asignado un String. Nuestro trabajo es construir un condicional if/else para que, si la variable contiene "javascript", imprima por consola el texto "Estoy aprendiendo". De lo contrario, que imprima"Lo aprenderé más adelante".
let lenguaje='python';
if (lenguaje==='javascript' ) {
    console.log('Estoy aprendiendo');
}else if (lenguaje !== 'javascript' ) {
    console.log('Lo aprenderé más adelante');
}

//Debemos completar la función puedePasar para que, analizando el nombre que recibe por parámetro, determine si la persona puede pasar o no. Si la persona se llama "Cosme Fulanito"", no lo dejará pasar y lo indicará retornando false; si la persona se llama de otra forma, lo dejará pasar y lo indicará retornando true.
function puedePasar(nombre) {
    if (nombre === 'Cosme Fulanito') {
        return false;        
    }else{
        return true;
    } 
}
console.log(puedePasar('Cosme'));

