const express = require('express');
const { updateProfile, getProfile, getAllProfiles, getProfileById, deleteProfile, addEducation, deleteEducation, addExperiences, deleteExperiences, getGithubRepos } = require('../controllers/profileController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(authMiddleware, getProfile).post(authMiddleware, updateProfile).delete(authMiddleware, deleteProfile);
router.route('/all').get(getAllProfiles);
router.route('/:id').get(getProfileById);
router.route('/experiences').post(authMiddleware, addExperiences);
router.route('/experiences/:id').delete(authMiddleware, deleteExperiences);
router.route('/education').post(authMiddleware, addEducation);
router.route('/education/:id').delete(authMiddleware, deleteEducation);
router.route('/github/:username').get(getGithubRepos);

module.exports = router;