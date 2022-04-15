import React from "react";
import PropTypes from "prop-types";
import { Button, Grid, Header, Message } from "semantic-ui-react";
import { connect } from "react-redux";

import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
import CourseCard from "./CourseCard";
import './dashboard.css'
import TopNavigation from "./TopNavigation";
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
	palette: {
	  primary: {
		main: "#5B84B1FF"
	  },
	  secondary: {
		main: "#FC766AFF"
	  }
	}
  });


const Dashboard = () => (

  <ThemeProvider  theme={theme}>


  <div style={{backgroundColor:"#212121" ,height:1000}}>
  <Stack spacing={6}>
  <div className="topNavigation"><TopNavigation /></div>
        

        <div>
        
        <h1 style={{color:"white" ,marginLeft:40,fontFamily:"Josefin Sans"}}>My Courses</h1>

        <div class="outer_container">

        <div className="course_container">
        <div>
        <CourseCard />
        </div>
        <div>
        <CourseCard className="courses" />
        </div>
        <div>
        <CourseCard className="courses" />
        </div>
       
        

        </div>


        
       
        
        </div>
        


       

        </div>   






  </Stack>


  
 
  </div>

  </ThemeProvider>
  
);



export default Dashboard;
