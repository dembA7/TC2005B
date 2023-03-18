const express = require('express');
const file = require('fs');
const router = express.Router();
const path = require('path');

router.get('/', (request, response, next) => {
    response.render('main', {
        titulo: 'Colores',
    });
});

router.get('/register', (request, response, next) => {
    response.render('register', {
        titulo: 'Registrar',
    });
});

module.exports = router;