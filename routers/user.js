const express = require("express");
const router = express.Router();
const { listAllUsers, addNewStudents,findByName ,findBycourse
    ,findBycourseAndGender,findByDate,findByStartOfPhoneNum} = require("../controller/user");
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log("Time: ", Date.now());
//     next();
// });


// define the home page route
router.get("/list/all", listAllUsers);
router.post("/new", addNewStudents);
router.get("/list/name/:name",findByName)
router.get("/list/course/:course",findBycourse)
router.get("/list/course/:course/:gender",findBycourseAndGender)
router.get("/list/younger",findByDate)
router.get("/list/number/:number",findByStartOfPhoneNum)
//

module.exports = router;
