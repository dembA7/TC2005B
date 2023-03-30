const User = require('../models/users.model');

exports.getLogin = (request, response, next) => {
    response.render('login', {
        titulo: 'Login',
    });
};

exports.postLogin = (request, response, next) => {
    response.redirect('/');
};

exports.getSignUp = (request, response, next) => {
    response.render('signup', {
        titulo: 'Sign Up',
    });
};

exports.postSignUp = (request, response, next) => {

    const user = new User({
        nombre: request.body.nombre,
        username: request.body.username,
        password: request.body.password,
    });

    user.save()
    .then(([rows, fieldData]) => {
        response.redirect('/usuarios/login');
    })
    .catch((error) => {console.log(error)});

    console.log("El usuario se ha guardado con éxito.")
};

exports.LogOut = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};