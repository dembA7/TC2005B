const colores = [
    { 
        color: 'Azul', 
        imagen: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAAA1BMVEVDhfVehWTeAAAASElEQVR4nO3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICXAcTgAAG6EJuyAAAAAElFTkSuQmCC', 
        descripcion: 'Conoce más sobre el color azul.'
    },
    {
        color: 'Amarillo',
        imagen: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAA1BMVEX/xVGzA0teAAAASElEQVR4nO3BMQEAAADCoPVPbQo/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICXAcTgAAG6EJuyAAAAAElFTkSuQmCC',
        descripcion: 'Conoce más sobre el color amarillo.'
    },
    {
        color: 'Verde',
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Flag_of_Libya_%281977%E2%80%932011%29.svg/360px-Flag_of_Libya_%281977%E2%80%932011%29.svg.png',
        descripcion: 'Conoce más sobre el color verde.'
    }
];

module.exports = class Color {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nuevo_Color) {
        this.nombre = nuevo_color.nombre || '';
        this.imagen = nuevo_color.imagen || 'https://bulma.io/images/placeholders/1280x960.pnghttps://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png';
        this.descripcion = nuevo_color.descripcion || '';
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        colores.push(this);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return colores;
    }
}