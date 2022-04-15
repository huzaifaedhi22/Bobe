import React from "react";
import './ClMapping.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TopNavigation from './TopNavigation';


let PLO;

function createData(Serial, description, PLO, Bt) {
    return { Serial, description, PLO, Bt };
}

const rows = [
    createData(1, " Understand the principles of Software Construction.", 6, 3),
    createData(
        2,
        "Apply patterns, frameworks and techniques for Software Construction.",
        262,
        16.0
    ),
    createData(
        3,
        " Design and develop solutions based on Software Construction principles.",
        262,
        16.0
    ),
    createData(4, "C Use modern tools for software construction", 305, 3.7)
];


function ClMapping() {


    // mapPlo((preValue) => {
    //     return {
    //       ...preValue,
    //       plo: selectedValues,
    //     };


    return (



        <div style={{backgroundColor:"#EEEEE"}}>
        
            <Stack>
            <TopNavigation />
                <div style={{backgroundColor:"#212121"}}>
                    <h1 style={{fontfamily:"Josefin Sans",color:"darkgray",marginLeft:20}}>Software Construction</h1>
                </div>
                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 250 ,fontFamily:"Josefin Sans",backgroundColor:"white"}} aria-label="simple table">
                            <TableHead>
                                <TableRow >
                                    <TableCell  align="right">Serial No</TableCell>
                                    <TableCell  align="center">Course Learning Outcome</TableCell>
                                    <TableCell  align="center">PLO Mapping</TableCell>
                                    <TableCell  align="center">BT Level</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >

                                        <TableCell  align="right">{row.Serial}</TableCell>
                                        <TableCell  align="center">{row.description}</TableCell>
                                        <TableCell  align="center">
                                            <Select
                                                labelId="PLO"
                                                id="PLO"
                                                value={PLO}
                                                label="PLO"
                                                // onChange={mapPlo}
                                            >
                                                <MenuItem value={1}>1</MenuItem>
                                                <MenuItem value={2}>2</MenuItem>
                                                <MenuItem value={3}>3</MenuItem>
                                                <MenuItem value={4}>4</MenuItem>
                                                <MenuItem value={5}>5</MenuItem>
                                                <MenuItem value={6}>6</MenuItem>
                                                <MenuItem value={7}>7</MenuItem>
                                                <MenuItem value={8}>8</MenuItem>
                                                <MenuItem value={9}>9</MenuItem>
                                                <MenuItem value={10}>10</MenuItem>
                                                <MenuItem value={11}>11</MenuItem>
                                            </Select>

                                        </TableCell>
                                        <TableCell align="center">
                                            <TableCell align="center">
                                                <Select
                                                    labelId="BT"
                                                    id="BT"
                                                    value={PLO}
                                                    label="BT"
                                                >


                                                    <MenuItem value={1}>C-1</MenuItem>
                                                    <MenuItem value={2}>C-2</MenuItem>
                                                    <MenuItem value={3}>C-3</MenuItem>
                                                    <MenuItem value={4}>P-1</MenuItem>
                                                    <MenuItem value={5}>P-2</MenuItem>
                                                    <MenuItem value={6}>P-3</MenuItem>

                                                </Select>

                                            </TableCell>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>


            </Stack>


        </div>



    );
}

export default ClMapping;