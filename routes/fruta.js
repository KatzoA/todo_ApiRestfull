'use strict'

var express = require('express');
var frutaController = require('../controllers/fruta');

var api = express.Router();

api.get('/pruebas', frutaController.pruebas);
api.post('/fruta', frutaController, saveFruta)

module.exports = api; 