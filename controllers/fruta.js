'use strict'

function pruebas(req, res) {
    res.status(200).send({
        message: 'Esta ruta es de prueba en mi apiRestful'
    });
}

module.exports = {
    pruebas
};