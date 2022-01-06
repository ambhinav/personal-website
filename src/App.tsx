import { Divider, Grid, Typography } from '@material-ui/core';
import { Element } from 'react-scroll'
import React from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <div className="Intro">
        <Intro />
      </div>
      <div className="Portfolio">
        <Grid
          container direction="column" justify='center' alignItems="center" spacing={10}
        >
          <Element name="about">
            <About />
          </Element>
          <Grid item style={{ maxWidth: "100%" }} id="experience">
            <Typography variant="h3" className="sectionHeader">Experience</Typography>
            <Divider style={{ margin: "20px" }}></Divider>
            <Experience />
          </Grid>
          <Grid item style={{ maxWidth: "80%" }} id="projects">
            <Typography variant="h3" className="sectionHeader">Projects</Typography>
            <Divider style={{ margin: "20px" }}></Divider>
            <Projects />
          </Grid>
          <Grid item style={{ maxWidth: "80%" }} id="skills">
            <Typography variant="h3" className="sectionHeader">Skills</Typography>
            <Divider style={{ margin: "20px" }}></Divider>
            <Skills />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
