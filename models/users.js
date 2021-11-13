const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            trim: true,
            required: true,
        },
        first_name: {
            type: String,
            trim: true,
            required: true,
        },
        last_name: { 
        
            type: String,
            trim: true,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Users", userSchema);
