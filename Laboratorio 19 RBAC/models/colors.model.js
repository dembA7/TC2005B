const db = require('../util/database');

// const colores = [
//     { 
//         color: 'Azul', 
//         descripcion: 'El color azul es un color muy versátil y puede tener diferentes simbolismos dependiendo del contexto cultural y personal en el que se encuentre.'
//     },
//     {
//         color: 'Amarillo',
//         descripcion: 'El color amarillo es un color muy vibrante y llamativo que se asocia a menudo con la alegría, la energía y la felicidad. Simboliza la luz del sol, la creatividad y la inteligencia.'
//     },
//     {
//         color: 'Verde',
//         descripcion: 'El color verde es a menudo asociado con la naturaleza, la frescura y la vida. Simboliza la esperanza, la armonía y el equilibrio, evocando sentimientos de paz y tranquilidad.'
//     }
// ];

module.exports = class Color {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevoColor) {
        this.color = nuevoColor.color;
        this.imagen = nuevoColor.imagen || null;
        this.descripcion = nuevoColor.descripcion;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(`
            INSERT INTO colors (nombre, descripcion) 
            values (?, ?)
        `, [this.color, this.descripcion]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM colors')
    }
}