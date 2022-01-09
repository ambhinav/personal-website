import * as React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import telerobot from '../assets/telerobot.jpg';
import foodboys from '../assets/foodboys.jpeg';

export const useStyles = makeStyles((theme) => ({
   root: {
      maxWidth: 345,
      minWidth: 100,
      margin: "3rem",
   },
   media: {
      height: 140,
   },
   content: {
     textAlign: "left"
   }
}))

function Projects() {
  const classes = useStyles()
  return (
    <Grid container direction="row" justify='center'>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={telerobot}/>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="div">
            Camera Operated Telerobot
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            January 2022
          </Typography>
          <Typography variant="body2"> 
          This project was part of a hackathon where we used RGB cameras to estimate body and hand poses to control the robotic arm in simulation. Our team won Top 8 Projects in NUS Hack & Roll 2022 out of 250 projects! I integrated Amazon SQS for publishing and consuming streaming data. Also, I integrated the python library Mediapipe for pose estimation into the project.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => window.open("https://devpost.com/software/telerobots")}>Video</Button>
          <Button size="small" onClick={() => window.open("https://github.com/ambhinav/hacknroll_telerobot")}>Source</Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={foodboys} />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="div">
            Foodboys Singapore
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            July 2020 - December 2020
          </Typography>
          <Typography variant="body2"> 
            This project was initiated to help brick and mortar halal "Hawker Stalls" in Singapore to gain a digital presence post the COVID-19 lockdown in Singapore. I joined this project as a web developer to develop a food ordering platform. Since its inception, sales have increased by 20% and more than 5 different food centers with over 100 stalls have joined! I created the front end using Vue.JS and backend using Firebase and Google Cloud Functions.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => window.open("https://foodboys.sg/")}>Website</Button>
          <Button size="small" onClick={() => window.open("https://github.com/ambhinav/foodboys")}>Source</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Projects;