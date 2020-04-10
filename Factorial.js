const fs = require('fs');

let ingresoDeNumero = process.argv[2]

function factorial(ingresoDeNumero) {
    if (ingresoDeNumero < 0)
        return -1;

    else if (ingresoDeNumero == 0)
        return 1;

    else return (ingresoDeNumero * factorial(ingresoDeNumero - 1))
}


console.log(factorial(ingresoDeNumero));