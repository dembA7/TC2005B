const Color = require('../models/colors.model');

exports.action = (request, response, next) => {
    response.render('main', {
        titulo: 'Colores',
    });
};

exports.action = (request, response, next) => {
    response.render('register', {
        titulo: 'Registrar',
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