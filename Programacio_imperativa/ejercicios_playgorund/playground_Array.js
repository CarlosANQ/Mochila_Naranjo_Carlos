//Tenemos un array con palabras sueltas que, juntas, forman una gran frase.
//Queremos, utilizando un método de array sobre la arrayFrase , convertirlo en una oración entera, y almacenar ese String en una variable llamada fraseNueva.
console.log('EJERCICIO 1');
let arrayFrase = ["No","he", "fracasado,", "simplemente", "me", "he", "topado", "con", "diez", "mil", "soluciones", "equivocadas"];
  let fraseNueva = arrayFrase.join(' ');
  console.log(fraseNueva);

//Para este ejercicio contamos con el array estudiantes, en donde, en cada índice, almacena un objeto con las propiedades nombre, promedio y curso.
//Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.
//Para eso debemos, utilizando un método de array, guardar los datos de Alexis en una variable nueva llamada alumnoEgresado.
console.log('EJERCICIO 2');
let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
  ];

  let alumnoEgresado =estudiantes.pop();
  console.log(alumnoEgresado);

//Nuestro trabajo será agregar de a un alumno por vez, utilizando algún método de array.
//Los valores de cada uno son:
//nombre: Juan
//promedio: 5
//curso: iOS
//------------------
//nombre: Miguel
//promedio: 2
//curso: Android
console.log('EJERCICIO 3');
let estudiantes_Dos = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ];
  estudiantes_Dos.push({nombre:'Juan', promedio:5, curso:'iOS'});
  estudiantes_Dos.push({nombre:'Miguel', promedio:2, curso:'Android'});

  console.log(estudiantes_Dos);

  //Tenemos que dar de baja al primer estudiante y queremos sacarlo del array estudiantes. Para eso, debemos crear una variable llamada alumnoDeBaja y, utilizando un método de array, almacenar en ella a ese primer estudiante.
  console.log('EJERCICIO 4');
  let estudiantes_Tres = [
    {
       nombre: 'Alvaro',
       promedio : 9,
       curso : 'Android',
     },
      {
        nombre: 'Daniel',
        promedio : 6,
        curso : 'Full Stack',
      },
      {
        nombre: 'Alexis',
        promedio : 3,
        curso : 'iOS',
      },
    ]
let alumnoDeBaja = estudiantes_Tres.shift();
console.log(alumnoDeBaja);

//Tenemos la tarea de reintegrar a dos estudiantes que se habían registrado al principio de todo, se dieron de baja, ¡pero volvieron! Y para que no pierdan su lugar privilegiado queremos, utilizando un método de array, agregar al inicio del mismo a cada estudiante (de a uno a la vez).
//Los datos que hay que agregar de cada uno son:
//nombre: "Mariana",
//promedio: 9,
//curso: "Full Stack"
//-------------------------
//nombre: "Francisco",
//promedio: 2,
//curso: "Android"
console.log('EJERCICIO 5');
let estudiantes_Cuarto = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    }
  ]
   estudiantes_Cuarto.unshift({nombre:'Mariana', promedio:9, curso:'Full Stack'});
    estudiantes_Cuarto.unshift({nombre:'Francisco', promedio:2, curso:'Android'});
    console.log(estudiantes_Cuarto);