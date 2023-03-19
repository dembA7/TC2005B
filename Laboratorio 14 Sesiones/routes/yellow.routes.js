const express = require('express');
const file = require('fs');
const router = express.Router();

router.get('/amarillo', (request, response, next) => {
    response.render('yellow', {
        titulo: 'Amarillo',
    });
});

module.exports = router;