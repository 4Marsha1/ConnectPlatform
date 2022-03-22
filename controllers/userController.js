const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const config = require('config')
const User = require('../models/userModel');

// @Route           GET /api/users/
// @Desc            Load user
// @Access          PRIVATE
const loadUser = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user)
    } catch (err) {
        res.status(400);
        throw new Error('User load failed!')
    }
})

// @Route           POST /api/users/
// @Desc            Register new user
// @Access          PUBLIC
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // CHECKS
    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Incomplete Credentials');
    }
    else if (password.length < 6) {
        res.status(400);
        throw new Error('Password should be 6 or more characters');
    }
    const user = await User.findOne({ email });
    if (user) {
        res.status(400);
        throw new Error('User Already Exists')
    }
    try {
        // PASSWORD HASHING
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // NEW USER DATA
        const avatar = gravatar.url(email)
        const newUser = new User({
            name, email, password: hashedPassword, avatar
        })
        await newUser.save();
        res.status(200).json({
            name: newUser.name,
            email: newUser.email,
            avatar: newUser.avatar,
            token: generateToken(newUser.id)
        });
    } catch (err) {
        res.status(400);
        throw new Error('User creation failed!')
    }
})

// @Route           POST /api/users/login
// @Desc            Authenticate user
// @Access          PUBLIC
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // CHECKS
    if (!email || !password) {
        res.status(400);
        throw new Error('Incomplete Credentials');
    }
    else if (password.length < 6) {
        res.status(400);
        throw new Error('Password should be 6 or more characters');
    }

    try {
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({
                name: user.name,
                email: user.email,
                token: generateToken(user.id)
            });
        }
    } catch (err) {
        res.status(400);
        throw new Error("User doesn't exist!");
    }
})

const generateToken = (id) => {
    return jwt.sign({ id }, config.get("JWT_SECRET"), { expiresIn: '60d' })
}

module.exports = {
    loadUser,
    registerUser,
    loginUser,
}