const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// @Route           POST /api/users/
// @Desc            Register new user
// @Access          Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('Register Controller')
})

// @Route           POST /api/users/login
// @Desc            Authenticate user
// @Access          Public
const loginUser = asyncHandler(async (req, res) => {
    res.send('Login Controller')
})

module.exports = {
    registerUser,
    loginUser
}