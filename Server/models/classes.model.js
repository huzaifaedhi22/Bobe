const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true,
    },
    program: {
        type: String, 
        required: true,
        trim: true,
    },
    level: {
        type: String, 
        required: true,
        trim: true,
    },
   
});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;