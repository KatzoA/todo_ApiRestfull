'use strict'

var Fruta = require('../models/fruta.js');

// controller de test
function pruebas(req, res) {
    res.status(200).send({
        message: 'Esta ruta es de prueba en mi apiRestful'
    });
}

// hacer un insert de fruta
function saveFruta(req, res) {
    var fruta = new Fruta();

    var params = req.body;

    if (params.nombre) {
        fruta.nombre = params.nombre;
        fruta.color = params.color;
        fruta.temporada = params.temporada;

        fruta.save((err, frutaStored) => {
            if (err) {
                res.status(500).send({ message: 'error en el servidor' })
            } else {
                if (frutaStored) {
                    res.status(200).send({ fruta: frutaStored });
                } else {
                    res.status(200).send({ message: 'La fruta no se ha guardado' });
                }
            }
        });
    } else {
        res.status(200).send({ message: 'El nombre de la fruta es obligatorio' });
    }
}

// recibir todas la frutas de la base de datos
function getFrutas(req, res) {
    Frutas.find({}).exec((err, frutas) => {
        if (err) {
            res.status(500).send({ message: 'error en el servidor' })
        } else {
            if (frutas) {
                res.status(200).send({ frutas });
            } else {
                res.status(404).send({ message: 'No hay frutas' });
            }
        }
    });
}

module.exports = {
    pruebas,
    saveFruta,
    getFrutas
};