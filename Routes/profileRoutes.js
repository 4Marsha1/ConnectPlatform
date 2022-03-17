const express = require('express');
const { updateProfile, getProfile, getAllProfiles, getProfileById, deleteProfile } = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(authMiddleware, getProfile).post(authMiddleware, updateProfile).delete(authMiddleware, deleteProfile);
router.route('/all').get(getAllProfiles);
router.route('/:id').get(getProfileById);

module.exports = router;