const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

<<<<<<< HEAD
// Rutas
const mainRuta = require('./routes/main.routes');
const azulRuta = require('./routes/blue.routes');
const verdeRuta = require('./routes/green.routes');
const amarilloRuta = require('./routes/yellow.routes');

// Middlewares
app.use('/', mainRuta);
app.use('/azul', azulRuta);
app.use('/verde', verdeRuta);
app.use('/amarillo', amarilloRuta);

// 404
app.use((request, response) => {
=======
const azulRuta = require('./routes/blue.routes');
app.use(azulRuta);

const verdeRuta = require('./routes/green.routes');
app.use(verdeRuta);

const amarilloRuta = require('./routes/yellow.routes');
app.use(amarilloRuta);


app.use('/',(request, response, next) => {
    let html = `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head><body>
        <title>Laboratorio 11 Express</title>
        <h2>Colores</h2>
        <p style="color: blue;">Azul<p>
        <p style="color: green;">Verde<p>
        <p style="color: #F4D03F;">Amarillo<p>
    `;
    response.send(html);
});

app.use((request, response, next) => {
>>>>>>> d493a96f540a4d4bed2ac51e9c2a7b14dc51ebeb
    response.statusCode = 404;
    response.send("Lo sentimos, no conocemos ese color.");
});

app.listen(3000);