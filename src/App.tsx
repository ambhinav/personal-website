import { Divider, Grid } from '@material-ui/core';
import React from 'react';
import './App.css';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Grid container direction="column" justify="center" alignItems="center">
        <About />
        <Divider />
      </Grid>
    </div>
  );
}

export default App;
