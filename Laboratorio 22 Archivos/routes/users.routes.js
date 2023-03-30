const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller')

router.get('/login', usersController.getLogin);
router.post('/login', usersController.postLogin);

router.get('/signup', usersController.getSignUp);
router.post('/signup', usersController.postSignUp);

router.get('/logout', usersController.logOut);

module.exports = router;