const question = require("../models/question.js");

exports.listAllquestion = async (req, res, next) => {
    try {
        const questionsList = await question.find({});
        res.status(200).json(questionsList);
        if (questionsList.length === 0) next(new Error("no users found in db"));
    } catch (error) {
        next(error);
    }
};
exports.addNewUser = async (req, res, next) => {
    try {
        let { username, email, bio, birthDate } = req.body;
        const newUser = await User.create({
            username: username,
            email: email,
            bio: bio,
            birthDate: birthDate,
        });
        res.status(200).json(newUser);
    } catch (error) {
        next(error);
    }
};
//put all your user functions here :
