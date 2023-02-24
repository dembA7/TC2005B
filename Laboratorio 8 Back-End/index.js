// =================================================================
//
// File: file.js
// Author: Arturo Diaz
// Date: 23/02/23
//
// =================================================================


// 1. Función que devuelve el promedio de un arreglo.

let arreglo = [7000, 5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

function average(){
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++){
        suma += arreglo[i];
    }
    var promedio = (suma / arreglo.length);
    return parseInt(promedio);
}

console.log("El promedio del arreglo es: " + average(arreglo) );


// 2. Función que recibe un string y escriba el string en un archivo de texto.

const filesystem = require("fs");

function string(string){
    filesystem.writeFileSync("file.txt", string);
    return string;
}

let exString = "'String de ejemplo escrito a través de una función.'";
console.log("Se ha escrito el texto: " + string(exString) + " dentro del archivo file.txt");


// 3. Función que devuelve el área de un rectángulo.

function area(base, altura){
    let area = base * altura;
    return area;
}

console.log("El área del rectángulo es: " + area(5,10));


// 4. Creación de un servidor que recibe peticiones y responde.

const http = require("http");

filesystem.readFileSync("..\\Laboratorio 3 CSS\\file.html", function(err, html) {
    if(err){
        throw err;
    }
});

const server = http.createServer( (request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.write("<h2>Bienvenido</h2>");
    response.write("Te acabo de responder.");
    response.end();
});

server.listen(3001);