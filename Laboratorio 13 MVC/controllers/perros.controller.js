exports.listar = (request, response, next) => {
    response.render('lista', {razas: razas})
};