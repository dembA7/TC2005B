const http = require('http');
const server = http.createServer( (request, response) => {
    
    console.log(request.url);

    if (request.url === "/") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write('<title>Laboratorio 10 Rutas</title>');
        response.write('<h2>Colores</h2>')
        response.write('<a href ="/azul">Azul</a><br>');
        response.write('<a href ="/verde">Verde</a><br>');
        response.write('<a href ="/amarillo">Amarillo</a><br>');
    }

    else if (request.url === "/azul" && request.method === "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write('<title>Azul</title>');
        response.write('<h2 style="color: blue;">Azul</h2>');
        response.write('<p style="color: blue;">El color azul es un color muy versátil y puede tener diferentes simbolismos dependiendo del contexto cultural y personal en el que se encuentre. En general, el azul se asocia con sentimientos de tranquilidad, calma y estabilidad. El azul también puede representar la profundidad y la serenidad, evocando una sensación de armonía y paz.</p>')
    }

    else if (request.url === "/verde" && request.method === "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write('<title>Verde</title>');
        response.write('<h2 style="color: green;">Verde</h2>');
        response.write('<p style="color: green;">El color verde es a menudo asociado con la naturaleza, la frescura y la vida. Simboliza la esperanza, la armonía y el equilibrio, evocando sentimientos de paz y tranquilidad. El verde también puede ser interpretado como un color de crecimiento y renovación, lo que lo hace muy popular en los sectores de la salud y el bienestar.</p>')
    }

    else if (request.url === "/amarillo" && request.method === "GET"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head><meta charset="utf-8"></head><body>');
        response.write('<title>Amarillo</title>');
        response.write('<h2 style="color: #F4D03F;">Amarillo</h2>');
        response.write('<p style="color: #F4D03F;">El color amarillo es un color muy vibrante y llamativo que se asocia a menudo con la alegría, la energía y la felicidad. Simboliza la luz del sol, la creatividad y la inteligencia. El amarillo también puede ser interpretado como un color de optimismo y positivismo, evocando sentimientos de entusiasmo y confianza. </p>')
    }

    else {
        response.statusCode = 404;
        response.write("Lo sentimos, no conocemos ese color.");
        response.end();
    }
});

server.listen(3000);