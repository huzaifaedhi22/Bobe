import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { Button, IconButton, Typography } from "@mui/material";
import TopNavigation from "./TopNavigation";

export default function AdminDashboard() {
 
  const Clo = (props) => (
    <TableRow>
      <TableCell>{props.clo.name}</TableCell>
      <TableCell>{props.clo.description}</TableCell>
      <TableCell>{props.clo.course}</TableCell>
      <TableCell>
        <Stack direction="row" spacing={0} sx={{ justifyContent: "flex-end" }}>
          <IconButton onClick={() => deleteCLO(props.clo)}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  );

  const [clos, setClos] = useState([]);

  useEffect(() => {
    async function getClos() {
      const response = await fetch("http://localhost:1337/api/clo-list/");

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const clos = await response.json();
      setClos(clos);
    }
    getClos();

    return;
  }, []);

  function cloList() {
    return clos.map((clo) => {
      return <Clo clo={clo} key={clo._id} />;
    });
  }

  function createCLO() {
    window.location.href = "/AddClo";
  }

  async function deleteCLO(clo) {
    const response = await fetch(
      `http://localhost:4000/api/delete-clo/${clo._id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      window.location.href = "/clos";
    }
  }

  return (

   
    <Container>
    
      <Box
        sx={{
          mt: "0",
          position:"sticky"
        }}
      >
      <div style={{width:1150,backgroundColor:"#212121"}}>


    
      <TopNavigation />
      <div style={{height:70}}>
      <h1 style={{fontfamily:"Josefin Sans",color:"darkgray",marginLeft:20}}>Course Learning Outcome's</h1>

      </div>
      </div>
        
      </Box>
      <div>
      <Table sx={{ border: "1px" ,}}>
        <TableHead sx={{ backgroundColor: "darkgray" }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Statement</TableCell>
            <TableCell>Course</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{cloList()}</TableBody>
      </Table>
      <Button
          startIcon={<AddIcon></AddIcon>}
            variant="contained"
            align="right"
            sx={{ backgroundColor: "darkgray", color: "black" }}
          onClick={() => {
            createCLO();
          }}
        >
          Add CLO
        </Button>
        
      </div>
    </Container>
  );
}
