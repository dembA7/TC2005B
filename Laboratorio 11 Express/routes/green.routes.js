const express = require('express');
const file = require('fs');
const router = express.Router();

router.get('/verde', (request, response) => {
    let html = `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head><body>
        <title>Verde</title>
        <h2 style="color: green;">Verde</h2>
        <p style="color: green;">El color verde es a menudo asociado con la naturaleza, la frescura y la vida. Simboliza la esperanza, la armonía y el equilibrio, evocando sentimientos de paz y tranquilidad. El verde también puede ser interpretado como un color de crecimiento y renovación, lo que lo hace muy popular en los sectores de la salud y el bienestar.</p>
    `;
    response.send(html);
});

module.exports = router;