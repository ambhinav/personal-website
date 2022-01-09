import { Divider, Grid, Typography } from '@material-ui/core';
import { Element } from 'react-scroll'
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
          <Grid item id="about">
            <Typography variant="h3" className="sectionHeader">Profile</Typography>
            <Divider style={{ margin: "10px" }}></Divider>
            <About />
          </Grid>
          <Grid item id="experience">
            <Typography variant="h3" className="sectionHeader">Experience</Typography>
            <Divider style={{ margin: "10px" }}></Divider>
            <Experience />
          </Grid>
          <Grid item id="projects">
            <Typography variant="h3" className="sectionHeader">Projects</Typography>
            <Divider style={{ margin: "10px" }}></Divider>
            <Projects />
          </Grid>
          <Grid item id="skills">
            <Typography variant="h3" className="sectionHeader">Skills</Typography>
            <Divider style={{ margin: "10px" }}></Divider>
            <Skills />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
