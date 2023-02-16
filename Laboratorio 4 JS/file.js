// variables, constatntes, consola (log, info, warn, error, assert)
// Alcance de las variables

var comida = "chilaquiles";

let cena = "tacos";

const precio = 70;

console.log("hola");
console.info("Valor de la comida: " + comida);
console.warn("El precio no se puede modificar");
console.error("Te dije que el precio no se puede modificar");

console.assert(1 === 1);
console.assert(1 === "1");
console.assert(1 == "1");
console.assert(1 == true);
console.assert(1 === true);

// Alcance de las variables

for (let i = 1; i <= 10; i++){
    console.log(i);
}
// Aquí ocurre un error porque la variable i murió al terminar el ciclo
console.log(i);

for (var i = 1; i <= 10; i++){
    console.log(i);
}
// Aquí no hay error, la variable i sigue existiendo
console.log(i);

// alert, prompt, confirm (diseño interactivo)

alert("hola!");

let nombre = prompt("Cómo te llamas?");

console.log("Hola " + nombre);

let is_hungry = confirm("Tienes hambre?");
console.log(is_hungry);

// funciones tradicionales
function numero_tacos(){
    return 5;
}

console.log(numero_tacos());

// funciones modernas
() => {} // funcion anónima o arrow functions

let cantidad_tacos = () => {
    return 10};
console.log(cantidad_tacos());