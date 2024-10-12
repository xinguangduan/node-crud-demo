const express = require('express');
const bodyParser = require('body-parser');
const dbConnection = require('./utils/dbConnection');
const config = require('./config/config');
const userRoutes = require('./router/userRouter');
const productRoutes = require('./router/productRouter');
const logger = require('./utils/logger');
const app = express();

app.use(bodyParser.json());

// Connect to the database
dbConnection.connectDB();

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.listen(config.port, () => {
    logger.info(`Server running at port ${config.port}`);
});