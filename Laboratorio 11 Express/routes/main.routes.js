const express = require('express');
const file = require('fs');
const router = express.Router();

router.get('/', (request, response) => {
    let html = `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head><body>
        <title>Laboratorio 11 Express</title>
        <h2>Colores</h2>
        <p><strong>Las rutas a visitar son:</strong><br><br>
        <a href ="/azul">Azul</a><br><br>
        <a href ="/verde">Verde</a><br><br>
        <a href ="/amarillo">Amarillo</a><br><br>
    `;
    response.send(html);
});

module.exports = router;