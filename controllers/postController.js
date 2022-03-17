const asyncHandler = require('express-async-handler');
const Post = require('../models/postModel');

// @Route           POST /api/posts/
// @Desc            Create new post
// @Access          PRIVATE
const createPost = asyncHandler(async (req, res) => {
    const { text } = req.body;
    if (!text) {
        res.status(400);
        throw new Error('Add text!')
    }
    try {
        const newPost = new Post({
            user: req.user.id,
            text,
            name: req.user.name,
            avatar: req.user.avatar
        })
        await newPost.save();
        res.status(200).json(newPost);
    } catch (err) {
        res.status(400);
        throw new Error('Post creation failed')
    }
})

// @Route           GET /api/posts/
// @Desc            Get all posts
// @Access          PRIvATE
const getAllPosts = asyncHandler(async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 });
        res.status(200).json(posts)
    } catch (err) {
        res.status(400);
        throw new Error('Post fetch failed')
    }
})

// @Route           GET /api/posts/:id
// @Desc            Get Post
// @Access          PRIvATE
const getPost = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        if (!post) {
            res.status(400);
            throw new Error('Post not found')
        }
        res.status(200).json(post)
    } catch (err) {
        res.status(400);
        throw new Error('Post fetch failed')
    }
})

// @Route           DELETE /api/posts/:id
// @Desc            Delete Post
// @Access          PRIvATE
const deletePost = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        if (!post) {
            res.status(400);
            throw new Error('Post Not Found')
        }
        if (post.user.toString() !== req.user.id) {
            res.status(401);
            throw new Error('Not Authorized')
        }
        await post.remove();
        res.status(200).json(post)
    } catch (err) {
        res.status(400);
        throw new Error('Post fetch failed')
    }
})

// @Route           POST /api/posts/like/:id
// @Desc            Like Post
// @Access          PRIvATE
const likePost = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        if (!post) {
            res.status(400);
            throw new Error('Post Not Found')
        }
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            res.status(400);
            throw new Error('Post already liked')
        }
        post.likes.unshift({ user: req.user.id });
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(400);
        throw new Error('Like failed')
    }
})

// @Route           POST /api/posts/unlike/:id
// @Desc            Unlike Post
// @Access          PRIvATE
const unlikePost = asyncHandler(async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        if (!post) {
            res.status(400);
            throw new Error('Post Not Found')
        }
        const index = post.likes.map(pst => pst.user).indexOf(id);
        post.likes.splice(index, 1);
        await post.save();
        res.status(200).json(post);
    } catch (err) {
        res.status(400);
        throw new Error('Unlike failed')
    }
})

module.exports = {
    createPost,
    getAllPosts,
    getPost,
    deletePost,
    likePost,
    unlikePost
}