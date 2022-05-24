import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { Button, TextField, Typography } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { Select } from "@mui/material";
import { MenuItem } from "@mui/material";
import TopNavigation from "./TopNavigation";

function App() {
  const [name, setName] = useState("");
  const [semester, setSemester] = useState("");
  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);
  const [instructor, setInstructor] = useState("");
  const [instructors, setInstructors] = useState([]);
  const [className, setClassName] = useState("");
  const [classes, setClasses] = useState([]);

  async function createCourseAssigned(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/create-courseAssigned", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        instructor,
        className,
        semester,
      }),
    });

    if (response.ok) {
      window.location.href = "/editCourse";
    }
  }

  useEffect(() => {
    async function getClasses() {
      const response = await fetch("http://localhost:1337/api/class-list");

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const classes = await response.json();
      setClasses(classes);
    }
    getClasses();
    return;
}, []);


  useEffect(() => {
    async function getCourses() {
      const response = await fetch("http://localhost:1337/api/get-course-list/");

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


    useEffect(() => {
        async function getInstructors() {
          const response = await fetch("http://localhost:1337/api/instructor-list");
    
          if (!response.ok) {
            const message = `An error occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
    
          const instructors = await response.json();
          setInstructors(instructors);
        }
        getInstructors();

    return;
  }, []);

  function optionsList() {
    return instructors.map((instructor) => {
      return (
        <MenuItem value={instructor.name} key={instructor._id}>
          {instructor.name}
        </MenuItem>
      );
    });
  }

  function CourseOptionsList() {
    return courses.map((course) => {
      return (
        <MenuItem value={course.name} key={course._id}>
          {course.name}
        </MenuItem>
      );
    });
  }

  function ClassesOptionsList() {
    return classes.map((className) => {
      return (
        <MenuItem value={className.name} key={className._id}>
          {className.name}
        </MenuItem>
      );
    });
  }

 

  
  return (
    <Container>
    <div style={{width:1150,backgroundColor:"#212121"}}>


    
<TopNavigation />
<div style={{height:70}}>
<h1 style={{fontfamily:"Josefin Sans",color:"darkgray",marginLeft:20}}>Edit Courses</h1>

</div>
</div>
      

      <div style={{marginTop:25}}>
      <Stack spacing={2}>
      <FormControl fullWidth>
          <InputLabel color="secondary">Course</InputLabel>
          <Select
            label="Course"
            color="secondary"
            value={course}
            onChange={(e) => setName(e.target.value)}
          >
            {CourseOptionsList()}
          </Select>
        </FormControl>
      <FormControl fullWidth>
          <InputLabel color="secondary">Instructor</InputLabel>
          <Select
            label="Instructor"
            color="secondary"
            value={instructor.name}
            onChange={(e) => setInstructor(e.target.value)}
          >
            {optionsList()}
          </Select>
        </FormControl>
        
        <FormControl fullWidth>
          <InputLabel color="secondary">Class</InputLabel>
          <Select
            label="Class"
            color="secondary"
            value={className.name}
            onChange={(e) => setClassName(e.target.value)}
          >
            {ClassesOptionsList()}
          </Select>
        </FormControl>
        <TextField
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          variant="outlined"
          label="Semester"
          color="secondary"
        />
        
        <Button onClick={createCourseAssigned} variant="contained" color="secondary">
          Assign Instructor
        </Button>
      </Stack>

      </div>
     
    </Container>
  );
  }
  

export default App;
