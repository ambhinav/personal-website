import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Grid
        container direction="column" alignItems="center" spacing={10}
       >
        <About />
        <Grid item style={{ maxWidth: "1600px" }}>
          <Typography variant="h3">Experience</Typography>
          <Divider></Divider>
          <Experience />
        </Grid>
        <Grid item style={{ maxWidth: "1200px" }}>
          <Typography variant="h3">Projects</Typography>
          <Divider></Divider>
          <Projects />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
