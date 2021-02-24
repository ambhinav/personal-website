import React from 'react';
import avatar from '../assets/profile.jpg';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

function About() {
	var bio = "Hello! I am a penultimate year computer science student from the National University of Singapore, specialising in Artificial Intelligence. I have worked in exciting startups as a software developer, specifically web applications. As someone who is constantly trying to improve their skillset, I love learning about new technologies. I am currently seeking an opportunity to improve my knowledge in Software Engineering.";
  return (
		<Grid container direction="column" justify="space-between" alignItems="center" className="About" spacing={5} style={{ maxWidth: '1000px' }}>
			<Grid item xs={12}>
				<Typography variant="h2">Hi! I'm Abhinav</Typography>
			</Grid>
			<Grid item xs={12}>
				<Avatar src={avatar} style={{ height: '250px', width: '250px' }}></Avatar>
			</Grid>
			<Grid container item xs={12} md={4} direction="row" justify="space-around">
				<Grid item xs={4}>
					<GitHubIcon onClick={event => window.open('https://github.com/ambhinav')} />
				</Grid>
				<Grid item xs={4}>
					<LinkedInIcon onClick={event => window.open('https://linkedin.com/in/abhinav-ramnath')}/>
				</Grid>
				<Grid item xs={4}>
					<EmailIcon onClick={event => window.location.href = 'mailto:ambhinav@yahoo.com'} />
				</Grid>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1">{ bio }</Typography>
			</Grid>
		</Grid>
  );
}

export default About;
