const Post = require("../models/posts");
//find all posts
exports.listAllPosts = async (req, res, next) => {
    try {
        const userList = await Post.find({});
        res.status(200).json(userList);

        // this is what i assume you meant
        if (userList.length === 0) next(new Error("no users found in db"));
    } catch (error) {
        next(error);
    }
};
//find all posts that was authored by "GoodGuyGreg"
exports.listAllPostsByAuthor = async (req, res, next) => {
    try {
        const {author} =req.params
        const userList = await Post.find({username:author});
        res.status(200).json(userList);

        // this is what i assume you meant
        if (userList.length === 0) next(new Error("no users found in db"));
    } catch (error) {
        next(error);
    }
};