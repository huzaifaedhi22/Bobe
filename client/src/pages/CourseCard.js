import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";
  import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { color, fontStyle } from '@mui/system';


export default function CourseCard() {
  



  
  const routeChange = () =>{ 
    this.context.location.transitionTo('HomePage');
  
  }


  const theme = createTheme({
    palette: {
      background:"#5B84B1FF",
      primary: {
      main: "#5B84B1FF"
      },
      secondary: {
      main: "#FC766AFF"
      }
    },
    typography: {
      fontFamily: [
        "Josefin Sans"
      ],
      h5: {
        color:"white"
      },
    }
    });


  return (
    <div >

    <Card sx={{ maxWidth: 445,backgroundColor:"#606060" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://static.vecteezy.com/system/resources/previews/002/997/552/large_2x/antivirus-software-chalk-white-icon-on-dark-background-vector.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5"   sx={{ color:"black"
  }} component="div">
            Software Construction
          </Typography>
          <Typography variant="body2" sx={{ color:"grey"
  }}>
            Credits 3+1
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small"  sx={{
    color: 'white',
    border:"2px solid",
    backgroundColor:"black"
  }} href={"/Grading"}>
          Grading
        </Button>
        <Button size="small" sx={{
    color: 'white',
    border:"2px solid",
    backgroundColor:"black"
  }}  href={"/ClMapping"}>
          CLO Mapping
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
