import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Button, TextField, Typography } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import TopNavigation from "./TopNavigation";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);

  async function createClo(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/create-clo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        course,
      }),
    });

    if (response.ok) {
      window.location.href = "/clos";
    }
  }

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
      setCourses(courses);
    }
    getCourses();

    return;
  }, []);

  function optionsList() {
    return courses.map((course) => {
      return (
        <MenuItem value={course.code} key={course._id}>
          {course.name}
        </MenuItem>
      );
    });
  }

  return (
    <Container>
      <div style={{ width: 1150, backgroundColor: "#212121" }}>
        <TopNavigation />
        <div style={{ height: 70 }}>
          <h1
            style={{
              fontfamily: "Josefin Sans",
              color: "darkgray",
              marginLeft: 20,
            }}
          >
            Add CLO
          </h1>
        </div>
      </div>

      <div style={{ marginTop: 25 }}>
        <Stack spacing={2}>
          <TextField
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            label="Name"
            color="secondary"
          />
          <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            label="Statement"
            color="secondary"
          />
          <FormControl fullWidth>
            <InputLabel color="secondary">Course</InputLabel>
            <Select
              label="Course"
              color="secondary"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              {optionsList()}
            </Select>
          </FormControl>

          <Button
            startIcon={<AddIcon></AddIcon>}
            id = "add-clo-button"
            variant="contained"
            align="right"
            sx={{ backgroundColor: "darkgray", color: "black" }}
            onClick={() => {
              createClo();
            }}
          >
            Add CLO
          </Button>
        </Stack>
      </div>
    </Container>
  );
}

export default App;
