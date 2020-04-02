const fs = require('fs');


module.exports.crearArchivo = ()=>{

   
    let [,,nombreArchivo,textoArchivo] = process.argv;
    
    
    
    fs.writeFileSync(`${nombreArchivo}.txt`, textoArchivo);
    }
