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

let number = prompt ("Ingresa un número: ");
document.write("<h2> Ejercicio 1 </h2>")
for (let i = 1; i <= number; i ++){
    document.write(i + "  " + Math.pow(i, 2) + "   " + Math.pow(i, 3), "<br>");
}

// =========================================================
// Ejercicio 2
// Suma de dos números aleatorios y tiempo de ejecución.
// =========================================================

const random1 = Math.floor(Math.random() * 10) + 1;
const random2 = Math.floor(Math.random() * 10) + 1;
const addition = random1 + random2;
const start = new Date ();
let answer1 = prompt ("La suma de los números: " + random1 + " + " + random2 + " es: ");
const end = new Date();
const time = end - start;

if (answer1 == addition){
    document.write("<h2> Ejercicio 2. </h2> Respuesta correcta.", "<br>");
}

else{
    document.write("<h2> Ejercicio 2. </h2> Respuesta incorrecta.", "<br>");
}

document.write("Escribir la respuesta te tomó: " + time + " milisegundos.", "<br>");

// =========================================================
// Ejercicio 3
// Función que retorna la cantidad de números negativos, 0s y valores mayores a 0 en un arreglo.
// =========================================================

function contador(){
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;

    arreglo.forEach(element => {
        if (element>0) positivos++;
        if (element<0) negativos++;
        if (element == 0) ceros++;
    });

    document.write("<h2> Ejercicio 3. </h2>");
    document.write("Números positivos en el arreglo: " + positivos, "<br>");
    document.write("Números negativos en el arreglo: " + negativos, "<br>");
    document.write("Número de ceros en el arreglo: " + ceros, "<br>");
}

const arreglo = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
contador(arreglo);

// =========================================================
// Ejercicio 4
// Función que retorna el promedio de cada fila de un arreglo
// =========================================================

function promedio(){
    let promedios = [];

    for (let i = 0; i < matriz.length; i++) {
        let fila = matriz[i];
        let suma = 0;
        for (let j = 0; j < fila.length; j++) {
          suma += fila[j];
        }
        let promedio = suma / fila.length;
        promedios.push(promedio);
      }
      return promedios;
}

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  let promedios = promedio(matriz);

  document.write("<h2> Ejercicio 4 </h2>")
  document.write("El promedio de las filas es: " + promedios, "<br>");

// =========================================================h2
// Ejercicio 5
// Función que retorna un número con sus dígitos inversos
// =========================================================

function inverso() {
    let invertido = 0;

    while (numero > 0) {
      let digito = numero % 10;
      invertido = invertido * 10 + digito;
      numero = Math.floor(numero / 10);
    }
    return invertido;
  }

let numero = 12345;
let invertido = inverso(numero);

document.write("<h2> Ejercicio 5 </h2>")
document.write("El número inverso es: " + invertido);