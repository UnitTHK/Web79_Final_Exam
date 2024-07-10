const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');


const generateToken = (id) => {
    return jwt.sign({ id }, "ThisIsARandomKeyIDunnoWhatIAmTypingHereLmao", {
        expiresIn: '30d',
    });
};

const register = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const userExists = await User.findOne({ username });

    if (userExists) {
        res.status(400);
        throw new Error('This username is already taken!');
    }

    const user = await User.create({ username, password });

    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error('User Data Invalid!');
    }
});

const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            username: user.username,
            token: generateToken(user._id)
        });
    } else {
        res.status(401);
        throw new Error('Invalid username or password');
    }
});

const logout = (req, res) => {
    res.json({ message: 'Successfully logged out' });
};

module.exports = { register, login, logout, generateToken };