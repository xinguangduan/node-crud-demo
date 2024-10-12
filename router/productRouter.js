const express = require('express');
const productController = require('../controller/productController');

const router = express.Router();

router.get('/products/:id', productController.getProduct);
router.post('/products', productController.createNewProduct);

module.exports = router