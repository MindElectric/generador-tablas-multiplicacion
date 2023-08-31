const fs = require('node:fs');
const colors = require('colors')

const crearArchivo = async (base = 5, listado = false, limite = 10) => {
    try {

        let salida = '';
        let consola = '';

        for (let index = 1; index <= limite; index++) {
            salida += `${base} x ${index} = ${base * index}\n`;
            consola += `${base} x ${index} = ${(base * index).toString().green}\n`;

        }

        if (listado) {
            console.log('=============');
            console.log(`Tabla del ${base}`.underline.cyan);
            console.log('=============');
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`.blue;

    } catch (error) {
        throw error;
    }



};

module.exports = {
    crearArchivo
}