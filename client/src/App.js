import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/dashboard'
import AddClo from './pages/AddClo'
import ClMapping from './pages/ClMapping'
import Courses from './pages/Courses'
import EditCourse from './pages/EditCourse'

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Grading from './pages/Grading';

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


const App = () => {
	
	return (
		<ThemeProvider theme={theme}>
		<div variant="contained" color="primary">
			<BrowserRouter>
				<Routes>
					<Route path="/login" exact element={<Login />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/ClMapping" element={<ClMapping />} />
					<Route exact path="/Grading" element={<Grading />} />
					<Route exact path="/AddClo" element={<AddClo />} />
					<Route exact path="/Courses" element={<Courses />} />
					<Route exact path="/EditCourse" element={<EditCourse />} />
				</Routes>
			</BrowserRouter>
		</div>
		</ThemeProvider>
	)
}

export default App