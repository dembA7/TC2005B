const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

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

const azulRuta = require('./routes/blue.routes');
app.use('/azul', azulRuta);

const verdeRuta = require('./routes/green.routes');
app.use('/verde', verdeRuta);

const amarilloRuta = require('./routes/yellow.routes');
app.use('/verde', amarilloRuta);

app.use((request, response, next) => {
    response.statusCode = 404;
    response.write("Lo sentimos, no conocemos ese color.");
    response.end();
});

app.listen(3000);