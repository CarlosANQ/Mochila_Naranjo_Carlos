// FUNCION DECLARADA
function ejemplo(){
    return 'hola, soy una funcion';
}

console.log(ejemplo());

// FUNCION EXPRESADA 
let ejemploA = function (){
    return 'hola, soy una funcion expresada';
}
console.log(ejemploA());

function esPar(a , b){
  let oper = (a % b) == 1;
  console.log(oper); 

}

console.log(esPar(11 , 5));