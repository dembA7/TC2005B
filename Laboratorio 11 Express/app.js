const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

app.use("/ruta", (request, response, next => {
    response.send("Hola desde la ruta /ruta");
}));

const hockeyRutas = require('./routes/hockey.routes');

app.use('/hockey', hockeyRutas);

app.use((request, response, next) => {
    console.log("Tercer middleware");
    response.status(404);
    
    //Envía la respuesta al cliente
    response.send('Lo sentimos, esta ruta no existe');
});
     
app.listen(3000);