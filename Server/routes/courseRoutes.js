const express = require("express")
const courseModel = require("../models/course.model");
const cloModel = require("../models/clo.model");
const app = express();

app.post("/api/create-course", async (request, response) => {
    const course = new courseModel(request.body);
  
    try {
      await course.save();
      response.send(course);
    } catch (error) {
      response.status(500).send(error);
    }
  });

app.get("/api/get-course-list", async (request, response) => {
    const courseList = await courseModel.find({});
  
    try {
      response.send(courseList);
    } catch (error) {
      response.status(500).send(error);
    }
  });

  

module.exports = app;