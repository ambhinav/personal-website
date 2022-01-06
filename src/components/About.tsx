import avatar from '../assets/profile.jpg';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Hidden, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function About() {
	var bio = "Hi! I'm an independent and curious programmer who loves learning and communicating my ideas. I am currently seeking a full-time role as a Software Engineer (Backend/Full-Stack). I enjoy playing the electric guitar and role-playing video games in my free time.";
  return (
		<Grid container direction="column" alignItems="center" spacing={5} style={{ maxWidth: '80%', paddingTop: '5vh' }}>
			<Grid item xs={12}>
				<Avatar src={avatar} style={{ height: '200px', width: '200px' }}></Avatar>
			</Grid>
			<Grid container item xs={12} md={4} direction="row" justify="space-around" spacing={2}>
				<Grid item xs={4}>
					<GitHubIcon fontSize="large" onClick={event => window.open('https://github.com/ambhinav')} />
				</Grid>
				<Grid item xs={4}>
					<LinkedInIcon fontSize="large" onClick={event => window.open('https://linkedin.com/in/abhinav-ramnath')}/>
				</Grid>
				<Grid item xs={4}>
					<EmailIcon fontSize="large" onClick={event => window.location.href = 'mailto:ambhinav@yahoo.com'} />
				</Grid>
			</Grid>
			{/* Mobile friendly bio */}
			<Hidden mdDown>
				<Grid item xs={12} style={{ maxWidth: '50%' }}>
					<Typography variant="body1">{ bio }</Typography>
				</Grid>
			</Hidden>
			<Hidden mdUp>
				<Grid item xs={12}>
					<Typography variant="body1">{ bio }</Typography>
				</Grid>
			</Hidden>
		</Grid>
  );
}

export default About;
