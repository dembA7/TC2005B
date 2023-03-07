const express = require('express');
const file = require('fs');
const router = express.Router();

router.get('/azul', (request, response, next) => {

    let html = `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head><body>
        <title>Azul</title>
        <h2 style="color: blue;">Azul</h2>
        <p style="color: blue;">El color azul es un color muy versátil y puede tener diferentes simbolismos dependiendo del contexto cultural y personal en el que se encuentre. En general, el azul se asocia con sentimientos de tranquilidad, calma y estabilidad. El azul también puede representar la profundidad y la serenidad, evocando una sensación de armonía y paz.</p>
    `;
    response.send(html);
});

// router.post('/azul', (request, response, next) => {
//     file.writeFileSync('file.txt', request.body.tu_auto);
//     response.send("Obtuviste un: " + request.body.tu_auto);
// });

module.exports = router;
