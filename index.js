
const express = require('express');
const routes = require('./routes')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
//conectar mongo

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Restapi', {
    UseNewUrlParser:true
})
//iniciando app
const app = express();

//habilirtar bodyParser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//routes
app.use('/', routes())

//salida
app.listen(5000)