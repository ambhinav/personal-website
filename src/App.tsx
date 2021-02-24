import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Grid
        container direction="column" alignItems="center" spacing={10}
       >
        <About />
        <Grid item style={{ maxWidth: "1000px" }}>
          <Typography variant="h3">Experience</Typography>
          <Divider></Divider>
          <Experience />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
