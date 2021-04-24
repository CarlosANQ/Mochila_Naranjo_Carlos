const metros = 100;

let nombre;
let edad;
let peso;
let alturaM;
let prepaga;
let IMC;

nombre = "Nicolas Lopez";
edad = 27;
peso = 83.5;
alturaM = 170/metros;
prepaga = true;
IMC = peso/(alturaM * alturaM);

console.log(nombre + " tiene " + edad + " y su indice de masa corporal es de " + IMC);

nombre = "Esteban Piazza";
edad = 28;
peso = 80.1;
alturaM = 176/metros;
prepaga = true;
IMC = peso/(alturaM * alturaM);

console.log(nombre + " tiene " + edad + " y su indice de masa corporal es de " + IMC);

nombre = "Jose Fermoso";
edad = 33;
peso = 63.7;
alturaM = 153/metros;
prepaga = false;
IMC = peso/(alturaM * alturaM);

console.log(nombre + " tiene " + edad + " y su indice de masa corporal es de " + IMC);

nombre = "Juana Fernandez";
edad = 26;
peso = 55.0;
alturaM = 162/100;
prepaga = true;
IMC = peso/(alturaM * alturaM);

console.log(nombre + " tiene " + edad + " y su indice de masa corporal es de " + IMC);

