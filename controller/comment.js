const comments=require('../models/comments')
const Post = require("../models/posts");
//find all comments
exports.listAllComments = async (req, res, next) => {
    try {
        const userList = await comments.find({});
        res.status(200).json(userList);
        if (userList.length === 0) next(new Error("no users found in db"));
    } catch (error) {
        next(error);
    }
};
//find all comments that was authored by 
exports.listAllCommentsByAuthor = async (req, res, next) => {
    try {
        const {author}=req.params
        const commentList = await comments.find({username:author});
        res.status(200).json(commentList);
        if (commentList.length === 0) next(new Error("no users found in db"));
    } catch (error) {
        next(error);
    }
};

//find all comments belonging to the post "Reports a bug in your code"
exports.listAllCommentsByPost = async (req, res, next) => {
    try {
        const {title}=req.params
        const post=await Post.find({title:title});
        const postId=(post[0].id)
        const commentList = await comments.find({post:postId});
        res.status(200).json(commentList);
        if (commentList.length === 0) next(new Error("no users found in db"));
    } catch (error) {
        next(error);
    }
};