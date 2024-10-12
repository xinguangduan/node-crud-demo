const {getUserById, createUser, deleteUser} = require('../service/userService');

const getUser = async (req, res) => {
    const userId = req.params.id;
    const user = await getUserById(userId);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({message: 'User not found'});
    }
};

const createNewUser = async (req, res) => {
    const userData = req.body;
    const newUser = await createUser(userData);
    if (newUser) {
        res.status(201).json(newUser);
    } else {
        res.status(500).json({message: 'Failed to create user'});
    }
};

const deleteOldUser = async (req, res) => {
    const userId = req.params.id;
    const result = await deleteUser(userId);
    if (result) {
        res.status(200).json(result);
    } else {
        res.status(500).json({error: 'Failed to delete user'});
    }
}

module.exports = {
    getUser,
    createNewUser,
    deleteOldUser,
}