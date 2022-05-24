import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function TopNavigation() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static"
        elevation={0}
        sx={{
          backgroundColor:"#231F20",color:"darkgray"
        }}
      >
        <Toolbar>
          <Button sx={{ p: 0 }} href="/">
            <Typography variant="h6" component="div" color="secondary">
              BOBE
            </Typography>
          </Button>
          <Stack spacing={2} direction="row" sx={{ flexGrow: 1 }}>
            <Button color="inherit" style={{ marginLeft: 26 }} href="/Grading">
              Grading
            </Button>
            <Button color="inherit" href="/ClMapping">
              CLO Mapping
            </Button>
            <Button color="inherit" href="/Courses">
              Courses
            </Button>
           
            <Button color="inherit">Reports</Button>
          </Stack>
          <Button color="secondary" href="/Login">Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
