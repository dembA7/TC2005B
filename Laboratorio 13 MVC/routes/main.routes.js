const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/', mainController.getMain);
router.get('/register', mainController.getRegister);

module.exports = router;