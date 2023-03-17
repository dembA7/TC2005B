const express = require('express');
const file = require('fs');
const router = express.Router();
const path = require('path');

router.get('/verde', (request, response, next) => {
    response.render('green', {
        titulo: 'Verde',
    });
});

module.exports = router;