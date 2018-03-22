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

// recibir una fruta por su ID 
function getFruta(req, res) {
    var frutaId = req.params.id;

    Fruta.findById(frutaId).exec((err, fruta) => {
        if (err) {
            res.status(500).send({ message: 'error en el servidor' })
        } else {
            if (frutas) {
                res.status(200).send({ fruta });
            } else {
                res.status(404).send({ message: 'No existe fruta' });
            }
        }
    })
}

// update fruta por ID
function updateFruta(req, res) {
    var frutaId = req.params.id;
    var update = req.body;

    Fruta.findByIdAndUpdate(frutaId, update, { new: true }, (err, frutaUpdated) => {
        if (err) {
            res.status(500).send({ message: 'error en el servidor' })
        } else {
            if (frutaUpdated) {
                res.status(200).send({ fruta: frutaUpdated });
            } else {
                res.status(404).send({ message: 'No existe fruta' });
            }
        }
    })
}

// borrar fruta de la basde de datos
function deleteFruta(req, res) {
    var frutaId = req.params.id;

    Fruta.findByIdAndRemove(frutaId, ((err, frutaRemove) => {
        if (err) {
            res.status(500).send({ message: 'error en el servidor' })
        } else {
            if (frutaRemove) {
                res.status(200).send({ fruta: frutaRemove });
            } else {
                res.status(404).send({ message: 'No existe fruta' });
            }
        }
    }))
}

module.exports = {
    pruebas,
    saveFruta,
    getFrutas,
    getFruta,
    updateFruta,
    deleteFruta
};