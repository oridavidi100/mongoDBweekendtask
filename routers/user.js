const express = require("express");
const router = express.Router();
const { listAllquestion, addNewUser } = require("../controller/question");
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log("Time: ", Date.now());
//     next();
// });

//
// define the home page route
router.get("/list/all/questions", listAllquestion);
router.post("/new", addNewUser);
//

module.exports = router;
