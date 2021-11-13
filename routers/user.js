const express = require("express");
const router = express.Router();
const {listAllUsers} = require("../controller/user");
const {listAllPosts,listAllPostsByAuthor}= require('../controller/post')
const {listAllComments,listAllCommentsByAuthor,listAllCommentsByPost}=require('../controller/comment')
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log("Time: ", Date.now());
//     next();
// });
// define the home page route
// router.post("/new", addNewUser);

//get
router.get("/list/allUser", listAllUsers);
router.get("/list/allPosts",listAllPosts)
router.get('/posts/by/:author',listAllPostsByAuthor)
router.get('/list/allComments',listAllComments)
router.get('/comments/by/:author',listAllCommentsByAuthor)
router.get('/comments/on/:title',listAllCommentsByPost)
//

module.exports = router;
