import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react';
//import { Link } from 'react-scroll'
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
        <Grid item xs={12}>
				  <Typography variant="h2" className="sectionHeader">Abhinav Ramnath</Typography>
			  </Grid>
        {/* <nav>
          <Grid container justify="center" spacing={4}>
              <Grid item>
                <Link activeClass="active" to="experience" spy={true} smooth={true} duration={500}>Experience</Link>
              </Grid>
              <Grid item>
                <Link activeClass="active" to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
              </Grid>
              <Grid item>
                <Link activeClass="active" to="skills" spy={true} smooth={true} duration={500}>Skills</Link>
              </Grid>
          </Grid>
        </nav> */}
        <About />
        <Grid item style={{ maxWidth: "1600px" }} id="experience">
          <Typography variant="h3" className="sectionHeader">Experience</Typography>
          <Divider style={{ margin: "20px" }}></Divider>
          <Experience />
        </Grid>
        <Grid item style={{ maxWidth: "1200px" }} id="projects">
          <Typography variant="h3" className="sectionHeader">Projects</Typography>
          <Divider style={{ margin: "20px" }}></Divider>
          <Projects />
        </Grid>
        <Grid item style={{ maxWidth: "1200px" }} id="skills">
          <Typography variant="h3" className="sectionHeader">Skills</Typography>
          <Divider style={{ margin: "20px" }}></Divider>
          <Skills />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
