const express = require('express');
const file = require('fs');
const router = express.Router();

router.get('/azul', (request, response, next) => {
    response.render('blue', {
        titulo: 'Azul',
    });
});


module.exports = router;
