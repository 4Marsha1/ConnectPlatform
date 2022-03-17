const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// Basic Login Signup Routes ----- /api/users/
router.route('/').post(registerUser)
router.route('/login').post(loginUser)

module.exports = router;