const Students = require("../models/user");

exports.listAllUsers = async (req, res, next) => {
    try {
        // console.log("userlist");
        const userList = await Students.find({});
        console.log(userList, "userlist");
        res.status(200).json(userList);

        // this is what i assume you meant
        if (userList.length === 0) next(new Error("no users found in db"));
    } catch (error) {
        next(error);
    }
};


exports.addNewStudents = async (req, res, next) => {
    try {
        let { name, surname, birth, phone ,courses} = req.body;
        const newStudent= await Students.create({
            name: name,
            surname: surname,
            birth: birth,
            phone: phone,
            courses: courses,
        });
        res.status(200).json(newStudent);
    } catch (error) {
        next(error);
    }
};

exports.findByName= async (req, res, next) => {
    try {
        // console.log("userlist");
        const studentlist = await Students.find({name : req.params.name})
        res.send(studentlist)
        // this is what i assume you meant
        if (studentlist.length === 0) next(new Error("no users found in db"));
    } catch (error) {
        next(error);
    }
};

exports.findBycourse= async (req, res, next) => {
    try {
        // console.log("userlist");
        const studentlist = await Students.find({courses:req.params.course})
         res.status(200).send(studentlist)
        // this is what i assume you meant
        if (studentlist.length === 0) next(new Error("no users found in db"));
    } catch (error) {
        next(error);
    }
};

exports.findBycourseAndGender= async (req, res, next) => {
    try {
        // console.log("userlist");
        const studentlist = await Students.find({courses:req.params.course,gender:req.params.gender})
         res.status(200).send(studentlist)
        // this is what i assume you meant
        if (studentlist.length === 0) next(new Error("no users found in db"));
    } catch (error) {
        next(error);
    }
};
exports.findByDate= async (req, res, next) => {
    try {
        // console.log("userlist");
        const studentlist = await Students.find({birth:{ $gt: req.query.date}})
         res.status(200).send(studentlist)
        // this is what i assume you meant
        if (studentlist.length === 0) next(new Error("no users found in db"));
    } catch (error) {
        next(error);
    }
};
exports.findByStartOfPhoneNum= async (req, res, next) => {
    try {
        // console.log("userlist");
        const studentlist = await Students.find({ phone: {$regex : "^" + req.params.number}});
         res.status(200).send(studentlist)
        // this is what i assume you meant
        if (studentlist.length === 0) next(new Error("no users found in db"));
    } catch (error) {
        next(error);
    }
};

exports.updateCourse= async (req, res, next) => {
    const Name=req.params.name
    const newCourse=req.body.course
    console.log(Name ,newCourse)

    try {
        // console.log("userlist");
        await Students.updateOne({name:Name},{$push:{courses:newCourse}})
        res.send("update succes")
        // this is what i assume you meant
    } catch (error) {
        next(error);
    }
};


exports.updateBirth= async (req, res, next) => {
    const Name=req.params.name
    const date=req.body.date
    console.log(Name ,date)

    try {
        // console.log("userlist");
        await Students.updateOne({name:Name},{birth:date})
        res.send("update succes")
        // this is what i assume you meant
    } catch (error) {
        next(error);
    }
};
exports.listAllStudentsNameByLetter = async (req, res, next) => {
    try {
      const { letter } = req.params;
      const updateStudentCourse = await Students.find({ name: { $regex: letter } });
      console.log(updateStudentCourse, 'listAllStudentsNameByLetter');
      res.status(200).json(updateStudentCourse);
  
      // this is what i assume you meant
      if (updateStudentCourse.length === 0) next(new Error('no students found in db'));
    } catch (error) {
      next(error);
    }
  };
  exports.listAllStudentssurNameByTLetter = async (req, res, next) => {
    try {
      const { letter1,letter2 } = req.params;
      const updateStudentCourse = await Students.find({$or: [{ surame: { $regex: letter1 } }, { surName: { $regex: letter2 } }]} );
      console.log(updateStudentCourse,);
      res.status(200).json(updateStudentCourse);
  
      // this is what i assume you meant
      if (updateStudentCourse.length === 0) next(new Error('no students found in db'));
    } catch (error) {
      next(error);
    }
  };
  exports.deleteByName= async (req, res, next) => {
    const Name=req.params.name

    try {
        // console.log("userlist");
        await Students.remove({name:Name})
        res.send("delete succes")
        // this is what i assume you meant
    } catch (error) {
        next(error);
    }
};
exports.deleteByBirth= async (req, res, next) => {
    const date=req.params.date
    console.log(date);
    try {
        // console.log("userlist");
        const deletedStudent=await Students.findOneAndRemove({birth:date})
        res.send(deletedStudent)
        // this is what i assume you meant
    } catch (error) {
        next(error);
    }
};



//put all your user functions here :
