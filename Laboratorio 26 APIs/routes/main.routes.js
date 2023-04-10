const express = require('express');
const router = express.Router();

const mainController = require('../controllers/main.controller')

router.get('/', mainController.getMain);
router.get('/register', mainController.getRegister);
router.post('/register', mainController.postColor);
router.get('/list', mainController.getList);
router.get('/list/:valorBusqueda', mainController.getBuscar);
router.get('/api', mainController.getAPI);

module.exports = router;