let ingresoDeNumero = process.argv[2];
let numeroInverso = "";

for (let i = ingresoDeNumero.length - 1; i >= 0; i--){
    numeroInverso += ingresoDeNumero[i];
}

if (ingresoDeNumero == numeroInverso) {
    console.log(
        `Ingreso: ${ingresoDeNumero}\nSon Capicua`
        );
} else {

    console.log(

        `Ingreso: ${ingresoDeNumero}\nNo Son Capicua`
    );
    
}