let perro = {
    nombre: 'Maia',
    raza: 'pitbull',
    edad: 9,
    saludo: function () {
        return 'hola' + this.nombre;
    }
}

console.log(perro.nombre);
console.log(perro);