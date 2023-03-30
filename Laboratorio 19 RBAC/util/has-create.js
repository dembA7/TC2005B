module.exports = (request, response, next) => {
    if (!(request.session.privilegios.indexOf('registrarColor') >= 0)) {
        return response.redirect('/perros');
    }
    next();
}