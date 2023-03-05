
// =========================================================
// Ejercicio 1
// Funcion que escribe la tabla
// =========================================================

function script1(entrada){
    
    // let entrada = prompt("Ingrese un número: ")

    document.write("<table>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

    for (let i = 1; i <= entrada; i++){
        document.write("<tr>");
        document.write("<td>" + i + "</td>");
        document.write("<td>" + Math.pow(i, 2) + "</td>");
        document.write("<td>" + Math.pow(i, 3) + "</td>");
        document.write("</tr>");
    }

    document.write("</table>");
}

// =========================================================
// Funcion que prueba que la tabla sea correcta con un assert
// =========================================================

function test1(entrada){

    let expectedOutput = "<table><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>";

    for (let i = 1; i <= entrada; i++) {
        expectedOutput += "<tr><td>" + i + "</td><td>" + Math.pow(i, 2) + "</td><td>" + Math.pow(i, 3) + "</td></tr>";
      }

    expectedOutput += "</table>";

    let capturedOutput = '';
    const write = document.write;
    document.write = (str) => {
    capturedOutput += str;
    };

    script1(entrada);
    document.write = write;

    console.assert(capturedOutput === expectedOutput, "Test failed");
}

// =========================================================
// Funcion que corre el test de la tabla
// =========================================================

function runTest1(){
    let entrada = prompt("Ingrese un número: ");
    test1(parseInt(entrada));
}