const express = require('express');
const { createPost, getAllPosts, deletePost, getPost, likePost, unlikePost, addComment, deleteComment } = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').post(authMiddleware, createPost).get(authMiddleware, getAllPosts);
router.route('/:id').get(authMiddleware, getPost).delete(authMiddleware, deletePost);
router.route('/like/:id').post(authMiddleware, likePost).delete(authMiddleware, unlikePost);
router.route('/comment/:id').post(authMiddleware, addComment)
router.route('/comment/:id/:comment_id').delete(authMiddleware, deleteComment)

module.exports = router;