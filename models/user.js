const mongoose = require("mongoose");

const StudentsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        surName: {
            type: String,
            required: true,
        },
        birth: {
            type: Date,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        courses: [{type:String,required: true}],
    }
    ,{timestamps : true}
    );

module.exports = mongoose.model("Students", StudentsSchema);

