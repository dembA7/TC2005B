const Color = require('../models/colors.model');

exports.getMain = (request, response, next) => {
    
    let cookies = request.get('Cookie') || '';
    let mainConsultas = cookies.split(';')[0].split('=')[1] || 0;
    mainConsultas++;
    response.setHeader('Set-Cookie', 'mainConsultas=' + mainConsultas + '; HttpOnly');

    response.render('main', {
        titulo: 'Colores',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
    });
};

exports.getRegister = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let registerConsultas = cookies.split(';')[0].split('=')[1] || 0;
    registerConsultas++;
    response.setHeader('Set-Cookie', 'registerConsultas=' + registerConsultas + '; HttpOnly');

    response.render('register', {
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
        titulo: 'Registrar',
        privilegios: request.session.privilegios || [],
    });
};

exports.getBlue = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let blueConsultas = cookies.split(';')[0].split('=')[1] || 0;
    blueConsultas++;
    response.setHeader('Set-Cookie', 'blueConsultas=' + blueConsultas + '; HttpOnly');

    response.render('blue', {
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
        titulo: 'Azul',
    });
};

exports.getYellow = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let yellowConsultas = cookies.split(';')[0].split('=')[1] || 0;
    yellowConsultas++;
    response.setHeader('Set-Cookie', 'yellowConsultas=' + yellowConsultas + '; HttpOnly');

    response.render('yellow', {
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
        titulo: 'Amarillo',
    });
};

exports.getGreen = (request, response, next) => {

    let cookies = request.get('Cookie') || '';
    let greenConsultas = cookies.split(';')[0].split('=')[1] || 0;
    greenConsultas++;
    response.setHeader('Set-Cookie', 'greenConsultas=' + greenConsultas + '; HttpOnly');

    response.render('green', {
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
        titulo: 'Verde',
    });
};

exports.postColor = (request, response, next) => {

    const color = new Color({
        color: request.body.color,
        descripcion: request.body.descripcion,
        imagen: request.file.filename,
    });

    color.save()
    .then(([rows, fieldData]) => {
        response.redirect('/list');
    })
    .catch((error) => {console.log(error)});

    console.log("El color se ha guardado con éxito.")
};

exports.getList = (request, response, next) => {

    Color.fetchAll()
    .then(([rows, fieldData]) => {
        // console.log(rows);
        
        response.render('list', { 
            colores: rows,
            isLoggedIn: request.session.isLoggedIn || false,
            nombre: request.session.nombre || '',
            privilegios: request.session.privilegios || [],
        });
    })
    .catch(err => {console.log(err);});
};

exports.getBuscar = (request, response, next) => {
    
    Color.find(request.params.valorBusqueda)
    .then(([rows, fieldData]) => {
        response.status(200).json({colors: rows});
    })
    .catch(error => {
        console.log(error);
        response.status(500).json({message: "Internal Server Error"});
    });

};