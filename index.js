
const express = require('express');
const routes = require('./routes')

const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// importar cors
const cors = require('cors')

//conectar mongo

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Restapi', {
    UseNewUrlParser:true
})
//iniciando app
const app = express();

//habilitar cors
app.use(cors());

//habilirtar bodyParser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//routes
app.use('/', routes())

//salida
app.listen(5000)