const express = require('express');
const { createPost, getAllPosts, deletePost, getPost, likePost, unlikePost } = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').post(authMiddleware, createPost).get(authMiddleware, getAllPosts);
router.route('/:id').get(authMiddleware, getPost).delete(authMiddleware, deletePost);
router.route('/like/:id').post(authMiddleware, likePost);
router.route('/unlike/:id').post(authMiddleware, unlikePost);

module.exports = router;