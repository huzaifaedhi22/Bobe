const express = require("express");
const classModel = require("../models/classes.model");
const app = express()

app.get("/api/class-list", async (request, response) => {
    const classes = await classModel.find({});

    try {
        response.send(classes);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.post("/api/create-class", async (request, response) => {
    const classes = new classModel(request.body);

    try {
        await classes.save();
        response.send(classes);
    } catch (error) {
        response.status(500).send(error);
    }
});


module.exports = app;