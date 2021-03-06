'use strict'

var mongoose = require('mongoose');
var app = require('./app.js');
var port = 3800;

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/curso_mongo', { useMongoClient: true })
    .then(() => {
        console.log('la conexion a Mongodb se ha realizado correctamente');

        app.listen(port, () => {
            console.log('El servidor esta corriendo en localhost:3800');
        });
    })
    .catch(err => console.log(err)); 