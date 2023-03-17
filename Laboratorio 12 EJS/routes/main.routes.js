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
        <p><strong>Las rutas a visitar son:</strong>
        <p style="color: blue;">Azul<p>
        <p style="color: green;">Verde<p>
        <p style="color: #F4D03F;">Amarillo<p>
    `;
    response.send(html);
});

module.exports = router;