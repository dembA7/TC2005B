const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/amarillo', mainController.getYellow);

module.exports = router;