import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Header, Message } from "semantic-ui-react";
import { connect } from "react-redux";

import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import "./dashboard.css";
import TopNavigation from "./TopNavigation";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useState, useEffect } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5B84B1FF",
    },
    secondary: {
      main: "#FC766AFF",
    },
  },
});

export default function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      const response = await fetch(
        "http://localhost:1337/api/get-course-list/"
      );
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const courses = await response.json();
      console.log(courses);
      setCourses(courses);
    }
    getCourses();
  }, []);

  function courseList() {
    return courses.map((course) => {
      return (
        <div>
          <Card sx={{ maxWidth: 445, backgroundColor: "#606060" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://static.vecteezy.com/system/resources/previews/002/997/552/large_2x/antivirus-software-chalk-white-icon-on-dark-background-vector.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  sx={{ color: "black" }}
                  component="div"
                >
                  {course.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "grey" }}>
                  Credits 3+1
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                sx={{
                  color: "white",
                  border: "2px solid",
                  backgroundColor: "black",
                }}
                href={"/Grading"}
              >
                Grading
              </Button>
              <Button
                size="small"
                sx={{
                  color: "white",
                  border: "2px solid",
                  backgroundColor: "black",
                }}
                href={"/ClMapping"}
              >
                CLO Mapping
              </Button>
            </CardActions>
          </Card>
        </div>
      );
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: "#212121", height: 1000 }}>
        <Stack spacing={6}>
          <div className="topNavigation">
            <TopNavigation />
          </div>

          <div>
            <h1
              style={{
                color: "white",
                marginLeft: 40,
                fontFamily: "Josefin Sans",
              }}
            >
              My Courses
            </h1>

            <div class="outer_container">
              <div className="course_container">{courseList()}</div>
            </div>
          </div>
        </Stack>
      </div>
    </ThemeProvider>
  );
}
