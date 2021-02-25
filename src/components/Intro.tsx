import { Grid, Hidden, Typography } from '@material-ui/core';
import { Link } from 'react-scroll'

function Intro() {
    return (
          <Grid container direction="column" style={{ padding: "10vw"}}>
            <Grid item xs={12}>
              <Hidden mdDown>
                <Typography variant="h1">ABHINAV</Typography>
              </Hidden>  
              <Hidden mdUp>
                <Typography variant="h2">ABHINAV</Typography>
              </Hidden>
            </Grid>
            <Grid item xs={12}>
              <Hidden mdDown>
                <Typography variant="h1">RAMNATH</Typography>
              </Hidden>  
              <Hidden mdUp>
                <Typography variant="h2">RAMNATH</Typography>
              </Hidden>
            </Grid>
            <Grid container item style={{ paddingTop: "20px" }}>
              <nav>
                <Grid container item justify="center" spacing={4}>
                    <Grid item>
                      <Link className="active" to="about" spy={true} smooth={true} duration={500}>ABOUT</Link>
                    </Grid>
                    <Grid item>
                      <Link className="active" to="experience" spy={true} smooth={true} duration={500}>EXPERIENCE</Link>
                    </Grid>
                    <Grid item>
                      <Link className="active" to="projects" spy={true} smooth={true} duration={500}>PROJECTS</Link>
                    </Grid>
                    <Grid item>
                      <Link className="active" to="skills" spy={true} smooth={true} duration={500}>SKILLS</Link>
                    </Grid>
                </Grid>
              </nav>
            </Grid>
          </Grid>
    )
}

export default Intro;