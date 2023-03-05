// =================================================================
//
// File: scripts.js
// Author: Arturo Diaz
// Date: 19/02/23
//
// =================================================================

// =========================================================
// Ejercicio 1
// Tabla de un número dado con su valor cuadrado y cúbico.
// =========================================================

function script1(){

    // Creación de la tabla

    let input = prompt("Ingrese un número:");
    let table = "<table><tr><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>";

    for (let i = 1; i <= input; i++) {
        table += "<tr><td>" + i + "</td><td>" + Math.pow(i, 2) + "</td><td>" + Math.pow(i, 3) + "</td></tr>";
    }

    table += "</table>";
    document.write(table);

    // Prueba con un assert de la tabla esperada

    let expectedOutput = "<table><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";

    for (let i = 1; i <= input; i++) {
        expectedOutput += "<tr><td>" + i + "</td><td>" + Math.pow(i, 2) + "</td><td>" + Math.pow(i, 3) + "</td></tr>";
    }

    expectedOutput += "</table>";

    let capturedOutput = '';
    const write = document.write;
    document.write = (str) => {
        capturedOutput += str;
    };

    script1(input);
    document.write = write;

    console.assert(capturedOutput === expectedOutput, "Test failed");
    console.log(capturedOutput === expectedOutput, "Test completed");
}