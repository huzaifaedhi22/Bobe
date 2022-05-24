const express = require("express");
const courseAssignedModel = require("../models/courseAssigned.model");
const app = express()

app.get("/api/courseAssigned-list", async (request, response) => {
    const courseAssigned = await courseAssignedModel.find({});

    try {
        response.send(courseAssigned);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/api/create-courseAssigned", async (request, response) => {
    const courseAssigned = new courseAssignedModel(request.body);

    try {
        await courseAssigned.save();
        response.send(courseAssigned);
    } catch (error) {
        response.status(500).send(error);
    }
});


module.exports = app;