//cb viene siendo nuestro callback, una funcion que podemos ejecutar dentro de otra funcion
function suma(a, b, cb) {
    let r= a+b;
    cb(r) // usamos la variable "r" en nuestro callback
}

function callback(result) {
    console.log('resultado', result);
}

// necesita tres valores los dos parametros de la funcion suma y el callback que viene siendo la otra funcion
//la funcion callback la estamos llamando como "cb" dentro de la funcion "suma" osea "callback = cb"
suma(2, 4, callback); 
