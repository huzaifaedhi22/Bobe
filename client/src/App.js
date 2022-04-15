import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/dashboard'
import ClMapping from './pages/ClMapping'
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


const App = () => {
	
	return (
		<ThemeProvider theme={theme}>
		<div variant="contained" color="primary">
			<BrowserRouter>
				<Routes>
					<Route path="/login" exact element={<Login />} />
					<Route exact path="/dashboard" element={<Dashboard />} />
					<Route exact path="/ClMapping" element={<ClMapping />} />
				</Routes>
			</BrowserRouter>
		</div>
		</ThemeProvider>
	)
}

export default App