const express = require('express');
const productController = require('../controller/productController');

const router = express.Router();

router.get('/product/:id', productController.getProduct);
router.post('/product/', productController.createNewProduct);
router.delete('/product/:id', productController.deleteOldProduct);

module.exports = router