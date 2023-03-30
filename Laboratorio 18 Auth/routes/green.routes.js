const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/verde', mainController.getGreen);

module.exports = router;