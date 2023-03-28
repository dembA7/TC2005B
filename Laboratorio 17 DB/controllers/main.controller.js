const Color = require('../models/colors.model');

exports.getMain = (request, response, next) => {
    
    let cookies = request.get('Cookie') || '';
    let mainConsultas = cookies.split(';')[0].split('=')[1] || 0;
    mainConsultas++;
    response.setHeader('Set-Cookie', 'mainConsultas=' + mainConsultas + '; HttpOnly');

    response.render('main', {
        titulo: 'Colores',
    });
};

exports.getRegister = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let registerConsultas = cookies.split(';')[0].split('=')[1] || 0;
    registerConsultas++;
    response.setHeader('Set-Cookie', 'registerConsultas=' + registerConsultas + '; HttpOnly');

    response.render('register', {
        titulo: 'Registrar',
    });
};

exports.getBlue = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let blueConsultas = cookies.split(';')[0].split('=')[1] || 0;
    blueConsultas++;
    response.setHeader('Set-Cookie', 'blueConsultas=' + blueConsultas + '; HttpOnly');

    response.render('blue', {
        titulo: 'Azul',
    });
};

exports.getYellow = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let yellowConsultas = cookies.split(';')[0].split('=')[1] || 0;
    yellowConsultas++;
    response.setHeader('Set-Cookie', 'yellowConsultas=' + yellowConsultas + '; HttpOnly');

    response.render('yellow', {
        titulo: 'Amarillo',
    });
};

exports.getGreen = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let greenConsultas = cookies.split(';')[0].split('=')[1] || 0;
    greenConsultas++;
    response.setHeader('Set-Cookie', 'greenConsultas=' + greenConsultas + '; HttpOnly');

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
    console.log("El color se ha guardado con éxito.")
    response.redirect('/list');
};

exports.listar = (request, response, next) => {
    console.log(Color.fetchAll())
    response.render('list', { colores: Color.fetchAll() });
};