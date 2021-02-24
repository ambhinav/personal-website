import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Grid
        container direction="column" alignItems="center" spacing={10}
       >
        <About />
        <Grid item style={{ maxWidth: "1600px" }}>
          <Typography variant="h3" className="sectionHeader">Experience</Typography>
          <Divider style={{ margin: "20px" }}></Divider>
          <Experience />
        </Grid>
        <Grid item style={{ maxWidth: "1200px" }}>
          <Typography variant="h3" className="sectionHeader">Projects</Typography>
          <Divider style={{ margin: "20px" }}></Divider>
          <Projects />
        </Grid>
         <Grid item style={{ maxWidth: "1200px" }}>
          <Typography variant="h3" className="sectionHeader">Skills</Typography>
          <Divider style={{ margin: "20px" }}></Divider>
          <Skills />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
