const User = require('../models/users.model');
const bcrypt = require('bcryptjs');

exports.getLogin = (request, response, next) => {

    const mensaje = request.session.mensaje || '';
    if (request.session.mensaje) {
        request.session.mensaje  = '';
    }

    response.render('login', {
        titulo: 'Login',
        mensaje: mensaje,
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
    });
};

exports.postLogin = (request, response, next) => {
    User.fetchOne(request.body.username)
    .then(([rows, fieldData]) => {
        if (rows.length == 1) {
            console.log(rows);
            bcrypt.compare(request.body.password, rows[0].password)
            .then((doMatch) => {
                if(doMatch) {
                    request.session.isLoggedIn = true;
                    request.session.nombre = rows[0].nombre;
                    return request.session.save(err => {
                        response.redirect('/');
                    });
                } else {
                    request.session.mensaje = "Usuario y/o contraseña incorrectos";
                    response.redirect('/login');
                }
            })
            .catch((error) => console.log(error));
            
        } else {
            request.session.mensaje = "Usuario y/o contraseña incorrectos";
            response.redirect('/login');
        }
    })
    .catch((error) => {console.log(error);});
};

exports.getSignUp = (request, response, next) => {
    response.render('signup', {
        titulo: 'Sign Up',
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || '',
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
        response.redirect('/login');
    })
    .catch((error) => {console.log(error)});

    console.log("El usuario se ha guardado con éxito.")
};

exports.logOut = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};