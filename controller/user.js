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



//put all your user functions here :
