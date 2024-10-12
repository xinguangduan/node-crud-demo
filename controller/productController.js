const {getProductById, createProduct} = require('../service/productService');

const getProduct = async (req, res) => {
    const productId = req.params.id;
    const product = await getProductById(productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({error: 'Product not found'});
    }
};

const createNewProduct = async (req, res) => {
    const productData = req.body;
    const newProduct = await createProduct(productData);
    if (newProduct) {
        res.status(201).json(newProduct);
    } else {
        res.status(500).json({error: 'Failed to create product'});
    }
};

module.exports = {
    getProduct,
    createNewProduct,
};