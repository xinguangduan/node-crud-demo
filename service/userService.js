const User = require('../model/userModel');
const logger = require('../utils/logger');

const getUserById = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        logger.error(`Error fetching user with id ${id} :${error}`);
        return null;
    }
};

const createUser = async (userData) => {
    try {
        const newUser = new User(userData);
        await newUser.save();
        return newUser;
    } catch (error) {
        logger.error(`Error creating user with id ${id} :${error}`);
        return null;
    }
};

const deleteUser = async (id) => {
    try {
        const result = await User.findByIdAndDelete(id);
        return result;
    } catch (error) {
        logger.error(`Error deleting user with id ${id} :${error}`);
    }
}

module.exports = {
    getUserById,
    createUser,
    deleteUser,
};
