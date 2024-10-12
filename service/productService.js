const Product = require('../model/productModel');
const logger = require('../utils/logger');

const getProductById = async (id) => {
    try {
        const product = await Product.findById(id);
        return product;
    } catch (error) {
        logger.error(`Error fetching product with id ${id}: ${error}`);
        return null;
    }
};

const createProduct = async (productData) => {
    try {
        const newProduct = new Product(productData);
        await newProduct.save();
        return newProduct;
    } catch (error) {
        logger.error(`Error creating product: ${error}`);
    }
}

const deleteProduct = async (id) => {
    try {
        const result = await Product.findByIdAndDelete(id);
        return result;
    } catch (error) {
        logger.error(`Error deleting product: ${error}`);
    }
}

module.exports = {
    getProductById,
    createProduct,
    deleteProduct,
}