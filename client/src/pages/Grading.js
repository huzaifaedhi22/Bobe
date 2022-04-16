import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
import TopNavigation from "./TopNavigation"




export default function Grading() {
  function createData(name, maxMarks, average, clo) {
    return { name, maxMarks, average, clo };
  }

  function addMarksHandler(e) {
    const input = document.getElementById("newQuiz");
    console.log(input.classList.remove("hidden"));
  }

  function VerifyMarksHandler(e) {
    const input = document.getElementById("newQuiz");
    const name = document.getElementById("name").value;
    const maxMarks = document.getElementById("max").value;
    const average = document.getElementById("average").value;
    const clo = document.getElementById("clo").value;

    setQuizes([...quizes, createData(name, maxMarks, average, clo)]);
    console.log(input.classList.add("hidden"));
  }

  const [quizes, setQuizes] = useState([
    createData("Quiz 1", 10, 9, 1),
    createData("Quiz 2", 10, 2, 2),
  ]);

  return (
   
    
    <div style={{width:1500,backgroundColor:"#212121"}}>


    
      <TopNavigation />
      <div style={{height:70}}>
      <h1 style={{fontfamily:"Josefin Sans",color:"darkgray",marginLeft:20}}>Grading</h1>

      </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "darkgray" }}>
              <TableRow>
                <TableCell>Assessment</TableCell>
                <TableCell align="right">Available Marks</TableCell>
                <TableCell align="right">Class Average</TableCell>
                <TableCell align="right">CLO</TableCell>
                <TableCell align="right">Weightage</TableCell>
              </TableRow>
            </TableHead>
            <TableHead sx={{ backgroundColor: "#212121" }}>
              <TableRow>
                <TableCell style={{color:"white"}}>
                  Quiz
                  <IconButton sx={{ p: 0, ml: 1,color:"white" }} onClick={addMarksHandler}>
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell style={{color:"white"}}  align="right" colSpan={4}>
                  5%
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {quizes.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.maxMarks}</TableCell>
                  <TableCell align="right">{row.average}</TableCell>
                  <TableCell align="right">{row.clo}</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              ))}
              <TableRow className="hidden" id="newQuiz">
                <TableCell component="th" scope="row">
                  <input
                    id="name"
                    style={{ width: "35%", fontFamily: "DM Sans" }}
                  ></input>
                </TableCell>
                <TableCell align="right">
                  <input
                    id="max"
                    style={{
                      width: "15%",
                      fontFamily: "DM Sans",
                      textAlign: "right",
                    }}
                  ></input>
                </TableCell>
                <TableCell align="right" colSpan={1}>
                  <input
                    id="average"
                    style={{
                      width: "15%",
                      fontFamily: "DM Sans",
                      textAlign: "right",
                    }}
                  ></input>
                </TableCell>
                <TableCell align="right">
                  <select id="clo" style={{ fontFamily: "DM Sans" }}>
                    <option value="1">CLO-1</option>
                    <option value="2">CLO-2</option>
                  </select>
                </TableCell>
                <TableCell align="right">
                  <IconButton sx={{ p: 0 }}>
                    <DoneIcon onClick={VerifyMarksHandler}></DoneIcon>
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
            <TableHead sx={{ backgroundColor: "#212121" }}>
              <TableRow>
              <TableCell style={{color:"white"}}>
                  Assignment
                  <IconButton  sx={{ p: 0, ml: 1,color:"white" }}>
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell  style={{color:"white"}} align="right" colSpan={4}>
                  5%
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {quizes.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.maxMarks}</TableCell>
                  <TableCell align="right">{row.average}</TableCell>
                  <TableCell align="right">{row.clo}</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  );
}