const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

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
    response.statusCode = 404;
    response.send("Lo sentimos, no conocemos ese color.");
});

app.listen(3000);