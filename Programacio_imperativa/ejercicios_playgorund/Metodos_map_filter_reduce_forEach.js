// metodo .map() -- recibe una funcion calback como parametro
//recorre el array y devuelve un nuevo arra modificado
// las modificaciones se hacen en nuestra funcion callback
let alumnos = [
    {
    nombre:'carlos',
    numeropreguntas: 10,
    aprobado:true
    },
    {nombre:'nataly',
    numeropreguntas: 7,
    aprobado: false
    },
    {nombre:'pablo',
    numeropreguntas: 8,
    aprobado: true
    },
];
//--------------------------------------------------------------------
function ejemploMap(arrayUno, numpreguntas) {
     return arrayUno.map((array) => array.numeropreguntas - numpreguntas);   
}

//console.log(ejemploMap(alumnos,3));

// ----------------------------------------------------------------------

//metodo .filter()
//recibe una funcion como parametro
// retorna un nuevo array, obtenmiendo los elementos que hallan cumplido con la condicion

function ejemploFilter(ArrayDos) {
    return ArrayDos.filter(alumno => alumno.numeropreguntas > 7);
}
//console.log(ejemploFilter(alumnos));

// ----------------------------------------------------------------

//metodo .reduce()
//recibe una funcion como parametro
// la funcion que recibe como parametro maneja dos parametros el "ACUMULADOR" es el primer parametro que se pone donde va guardando el resultado, y el array que vendria siendo el segundo para metro.

// ejemplo 1 array.reduce((funcion callback(acumulador,arrayparametro) => (condicion),valor inicial del acumulador), para realizar la suma de los elementos.
let numeros=[1, 2, 3, 4, 5];
let resultado= numeros.reduce((accumulador,num)=> accumulador + num, 0);
// -------------------------------------
//ejemplo 2
let alumnosDos=['juan', 'carlos','nataly','nataly', 'pablo','carlos', 'fer'];
function ejemploReduce(arrayAlumno) {
    let numeroPersonas=arrayAlumno.reduce((cantAlumno,alumno)=>{
        cantAlumno[alumno]=(cantAlumno[alumno]|| 0) + 1;
        return cantAlumno;
    },{});//valor inicial es un objeto, guarda la respuesta en un objeto
    console.log('veces repetida en la lista: '+numeroPersonas.nataly);
    console.log(numeroPersonas);;
    return numeroPersonas.nataly >1;      
}
// suma los strings R//: juancarlosnatalynatalypablocarlos 
function ejemploReduceB(arrayAlumno) {
    let numeroPersonas=arrayAlumno.reduce((cantAlumno,alumno)=>{
        cantAlumno=cantAlumno+alumno;
        return cantAlumno;
    },2);
    return numeroPersonas;      
} 
//ejemplo 3 -- indexar es como la union de algo
let indexed= alumnos.reduce((acum,alumno)=>({
    ...acum,//es un spread en arrays, copia los datos del array en un nuevo array
    [alumno.nombre]:alumno, // aca estamos indexando el arrai por el nombre del alumno, para mas adelante poderlo buscar con el nombre
}),{}); //como valor inicial le damos un objeto vacio

//console.log(resultado);
//console.log(ejemploReduce(alumnosDos));
//console.log('ejemplo 2: ' + ejemploReduceB(alumnosDos));
//console.log(indexed);
//console.log(indexed['carlos']);

//-----------------------------------------------------------------------
//METODO .forEach()
//solo itera sobre el array 
//no retorna nada
let paises=['argentina','cuba','peru'];
function ejemploforEach(pais) {
    return pais.forEach(pais => console.log(pais));
}
ejemploforEach(paises);

