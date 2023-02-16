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

// html dinámico con eventos

let  button = document.getElementById("buenosdias");
button.innerHTML = "Buenos días!";
button.onclick = () => alert("Bueeeeeenos días!")

// arreglos
const arreglo = ["Elemento"];
console.log(arreglo);

arreglo["dos"] = 2;
arreglo.push("Otro elemento");
arreglo.length = 10;
arreglo[20] = "Fin del arreglo";

// recorrer un arreglo

for(let elemento in arreglo){
    console.log(elemento);
}

for(let valor of arreglo){
    console.log(valor);
}

// objetos

const objeto = {
    atributo_1: "valor 1",
    atributo_2: 2
}

console.log(objeto.atributo_1);
console.log(objeto.atributo_2);

console.log(objeto);

for (let elemento in objeto){
    console.log(elemento);
}

const arreglo_de_objetos = [{atributo_1: "valor 0", atributo_2: 1, objeto}];
console.log(arreglo_de_objetos);

for (let elemento in objeto){
    console.log(objeto.elemento);
}