const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();

router.get('/user/:id', userController.getUser);
router.post('/user', userController.createNewUser);
router.delete('/user/:id', userController.deleteOldUser);

module.exports = router