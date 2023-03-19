const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/azul', mainController.getBlue);

module.exports = router;
