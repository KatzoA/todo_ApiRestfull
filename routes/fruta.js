'use strict'

var express = require('express');
var frutaController = require('../controllers/fruta');

var api = express.Router();

api.get('/pruebas', frutaController.pruebas);

module.exports = api; 