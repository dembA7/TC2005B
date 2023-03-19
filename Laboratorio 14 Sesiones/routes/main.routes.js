const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/', mainController.getMain);

router.get('/register', mainController.getRegister);

router.get('/azul', mainController.getBlue);

router.get('/verde', mainController.getGreen);

// router.get('/amarillo', mainController.getYellow);

module.exports = router;