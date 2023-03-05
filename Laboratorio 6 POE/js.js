// =================================================================
//
// File: js.js
// Author: Arturo Diaz
// Date: 05/03/23
//
// =================================================================


function validar() {
    let contrasena = prompt("Ingrese una contrasena: ");
    let regexMayuscula = /[A-Z]/;
    let regexMinuscula = /[a-z]/;
    let regexDigito = /[0-9]/;
    let regexEspecial = /[\W_]/;
  
    if (
      regexMayuscula.test(contrasena) &&
      regexMinuscula.test(contrasena) &&
      regexDigito.test(contrasena) &&
      regexEspecial.test(contrasena) &&
      contrasena.length >= 8
    ) {
      alert("Contraseña válida.");
    } else {
      alert(
        "Contraseña no válida, vuelva a intentarlo."
      );
    }
  }