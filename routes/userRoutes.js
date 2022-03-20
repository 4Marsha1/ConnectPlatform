const express = require('express');
const { registerUser, loginUser, loadUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware')
const router = express.Router();

// Basic Login Signup Routes ----- /api/users/
router.route('/').get(authMiddleware, loadUser).post(registerUser)
router.route('/login').post(loginUser)

module.exports = router;