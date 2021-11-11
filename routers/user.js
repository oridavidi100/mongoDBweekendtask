const express = require("express");
const router = express.Router();
const { listAllUsers, addNewStudents,findByName ,findBycourse
    ,findBycourseAndGender,findByDate,findByStartOfPhoneNum,updateCourse
    ,updateBirth,listAllStudentsNameByLetter,listAllStudentssurNameByTLetter,
    deleteByName,deleteByBirth} = require("../controller/user");
// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//     console.log("Time: ", Date.now());
//     next();
// });


//get
router.get("/list/all", listAllUsers);
router.post("/new", addNewStudents);
router.get("/list/name/:name",findByName)
router.get("/list/course/:course",findBycourse)
router.get("/list/course/:course/:gender",findBycourseAndGender)
router.get("/list/younger",findByDate)
router.get("/list/number/:number",findByStartOfPhoneNum)

//put
router.put("/update/course/:name",updateCourse)
router.put("/update/birth/:name",updateBirth)
//search
router.get("/search/name/:letter",listAllStudentsNameByLetter)
router.get("/search/surName/:letter1,letter2",listAllStudentssurNameByTLetter)
//delete
router.delete("/delete/name/:name",deleteByName)
router.delete("/delete/birth/:date",deleteByBirth)

module.exports = router;
