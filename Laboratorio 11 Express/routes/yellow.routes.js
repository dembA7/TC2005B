const express = require('express');
const file = require('fs');
const router = express.Router();

router.get('/amarillo', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');
    response.send('<!DOCTYPE html>');
    response.send('<html>');
    response.send('<head><meta charset="utf-8"></head><body>');
    response.send('<title>Amarillo</title>');
    response.send('<h2 style="color: #F4D03F;">Amarillo</h2>');
    response.send('<p style="color: #F4D03F;">El color amarillo es un color muy vibrante y llamativo que se asocia a menudo con la alegría, la energía y la felicidad. Simboliza la luz del sol, la creatividad y la inteligencia. El amarillo también puede ser interpretado como un color de optimismo y positivismo, evocando sentimientos de entusiasmo y confianza. </p>');
});

// router.post('/amarillo', (request, response, next) => {
//     file.writeFileSync('file.txt', request.body.tu_auto);
//     response.send("Obtuviste un: " + request.body.tu_auto);
// });

module.exports = router;