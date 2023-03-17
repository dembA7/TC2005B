const express = require('express');
const file = require('fs');
const router = express.Router();

router.get('/amarillo', (request, response) => {
    let html = `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head><body>
        <title>Amarillo</title>
        <h2 style="color: #F4D03F;">Amarillo</h2>
        <p style="color: #F4D03F;">El color amarillo es un color muy vibrante y llamativo que se asocia a menudo con la alegría, la energía y la felicidad. Simboliza la luz del sol, la creatividad y la inteligencia. El amarillo también puede ser interpretado como un color de optimismo y positivismo, evocando sentimientos de entusiasmo y confianza.</p>
    `;
    response.send(html);
});

module.exports = router;