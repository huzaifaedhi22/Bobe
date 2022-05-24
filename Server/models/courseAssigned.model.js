const mongoose = require("mongoose");

const courseAssignedSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true,
    },
    instructor: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    className: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    semester: {
        type: String,
        required: true,
    }
});

const courseAssigned = mongoose.model("courseAssigned", courseAssignedSchema);

module.exports = courseAssigned;