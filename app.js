'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// cargar rutas
var fruta_routes = require('./routes/fruta');
// middelware bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

// Cors

// rutas
app.use('/api', fruta_routes)

module.exports = app;