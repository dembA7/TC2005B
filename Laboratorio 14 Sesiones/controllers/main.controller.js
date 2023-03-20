const Color = require('../models/colors.model');

exports.getMain = (request, response, next) => {
    response.render('main', {
        titulo: 'Colores',
    });
};

exports.getRegister = (request, response, next) => {
    response.render('register', {
        titulo: 'Registrar',
    });
};

exports.getBlue = (request, response, next) => {
    response.render('blue', {
        titulo: 'Azul',
    });
};

exports.getYellow = (request, response, next) => {
    response.render('yellow', {
        titulo: 'Amarillo',
    });
};

exports.getGreen = (request, response, next) => {
    response.render('green', {
        titulo: 'Verde',
    });
};

exports.postColor = (request, response, next) => {

    const color = new Color({
        color: request.body.color,
        descripcion: request.body.descripcion,
    });

    color.save();
    response.redirect('/');
};

exports.listar = (request, response, next) => {
    response.render('list', { colors: Color.fetchAll() });
};

function contador(req, res) {
    var contador = parseInt(req.cookies.contador || 0);
    contador++;
    res.cookie('contador', contador);
    res.send('Número de consultas: ' + contador);
    console.log('Número de consultas: ' + contador);
}  

exports.contador = contador;