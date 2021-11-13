const User = require("../models/users");

exports.listAllUsers = async (req, res, next) => {
    try {
        const userList = await User.find({});
        res.status(200).json(userList);

        // this is what i assume you meant
        if (userList.length === 0) next(new Error("no users found in db"));
    } catch (error) {
        next(error);
    }
};
// exports.addNewUser = async (req, res, next) => {
//     try {
//         let { username, email, bio, birthDate } = req.body;
//         const newUser = await User.create({
//             username: username,
//             email: email,
//             bio: bio,
//             birthDate: birthDate,
//         });
//         res.status(200).json(newUser);
//     } catch (error) {
//         next(error);
//     }
// };
//put all your user functions here :
