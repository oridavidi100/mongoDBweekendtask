const mongoose = require("mongoose");

const questionsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        correctAnswer: {
            type: String,
            required: true,
        },
        answers: {
            type: [String],
            required: true,
        },
        difficulty: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("questions", questionsSchema);
