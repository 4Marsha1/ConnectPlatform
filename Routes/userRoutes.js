const express = require('express');
const { registerUser, loginUser, getUser } = require('../controllers/userController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// Basic Login Signup Routes ----- /api/users/
router.route('/').post(registerUser)
router.route('/login').post(loginUser)
router.route('/me').get(authMiddleware, getUser);

module.exports = router;