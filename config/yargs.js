
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: "number",
        demandOption: true,
        describe: "Base de la tabla multiplicar"
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: "Muestra la tabla en consola"
    })
    .option('h', {
        alias: 'hasta',
        type: "number",
        default: 10,
        describe: "Hasta que numero se va a multiplicar"
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un numero"
        }
        if (isNaN(argv.h)) {
            throw 'Tiene que ser un numero el limite'
        }

        return true;
    })
    .argv;


module.exports = argv;