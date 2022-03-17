const express = require('express');
const { updateProfile } = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').post(authMiddleware, updateProfile)

module.exports = router;