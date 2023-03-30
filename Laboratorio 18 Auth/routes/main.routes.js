const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/', mainController.getMain);
router.get('/register', mainController.getRegister);
router.post('/register', mainController.postColor);
router.get('/list', mainController.getList);
router.get('/login', mainController.getLogin);
router.get('/signup', mainController.getSignUp);

module.exports = router;