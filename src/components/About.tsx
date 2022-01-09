import avatar from '../assets/profile.jpg';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Hidden, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function About() {
  var bio = "Hi, welcome to my porfolio! I'm an independent and curious programmer who loves learning and communicating my ideas. I am currently seeking a full-time role as a Software Engineer (Backend/Full-Stack). I enjoy playing the electric guitar and role-playing video games in my free time :)";
  return (
		<Grid container direction="column" spacing = {5} style={{maxWidth: '700px', padding: '5vw'}}>
			<Grid item xs={12} justify="center">
				<Typography variant="body1">{ bio }</Typography>
			</Grid>
			<Grid direction="row" container spacing={2} justify='center'>
				<Grid item>
					<GitHubIcon fontSize="large" onClick={event => window.open('https://github.com/ambhinav')} />
				</Grid>
				<Grid item>
					<LinkedInIcon fontSize="large" onClick={event => window.open('https://linkedin.com/in/abhinav-ramnath')}/>
				</Grid>
				<Grid item>
					<EmailIcon fontSize="large" onClick={event => window.location.href = 'mailto:ambhinav@yahoo.com'} />
				</Grid>
			</Grid>
			{/* Mobile friendly bio */}
			{/* <Hidden mdDown>
				<Grid item xs={12} style={{ maxWidth: '50%' }}>
					<Typography variant="body1">{ bio }</Typography>
				</Grid>
			</Hidden>
			<Hidden mdUp>
				<Grid item xs={12}>
					<Typography variant="body1">{ bio }</Typography>
				</Grid>
			</Hidden> */}
		</Grid>
  );
}

export default About;
