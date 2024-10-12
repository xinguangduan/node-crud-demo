const mongoose = require('mongoose');
const dbConfig = require('../config/dbconfig');
const logger= require('../utils/logger');

const connectDB = async () => {
    try {
        await mongoose.connect(dbConfig.mongoURI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        logger.info('Connected to mongodb...');
    } catch (error) {
        logger.error('Error connecting to mongodb...:', error);
    }
};
module.exports = {connectDB,};
