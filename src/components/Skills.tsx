import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import './Skills.css';


function Skills() {
  return (
    <div className="Skills">
        <Container>
            <Grid container style={{ justifyContent: "space-between" }} spacing={8}>
                <Grid container item direction="column" xs={12} md={3} spacing={4}>
                    <Grid item>
                        <Typography variant="h6">Languages</Typography>
                    </Grid>
                    <Grid item>
                        <img alt="JavaScript" src="https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/javascript/javascript.svg"></img>
                    </Grid>
                    <Grid item>
                        <img alt="TypeScript" src="https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/typescript/typescript.svg"></img>
                    </Grid>
                    <Grid item>
                        <img alt="Python" src="https://raw.githubusercontent.com/abranhe/programming-languages-logos/master/src/python/python.svg"></img>
                    </Grid>
                    <Grid item>
                        <img alt="C++" src="https://raw.githubusercontent.com/abranhe/programming-languages-logos/30a0ecf99188be99a3c75a00efb5be61eca9c382/src/cpp/cpp.svg"></img>
                    </Grid>
                    <Grid item>
                        <img alt="Java" src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/322px-Java_Logo.svg.png"></img>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={3} direction="column" spacing={4}>
                    <Grid item>
                        <Typography variant="h6">Frameworks</Typography>
                    </Grid>
                    <Grid item>
                        <img alt="VueJS" src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"></img>
                    </Grid>
                    <Grid item>
                        <img alt="ReactJS" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"></img>
                    </Grid>
                    <Grid item>
                        <img alt="NodeJS" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"></img>
                    </Grid>
                    <Grid item>
                        <img alt="Flask" src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"></img>
                    </Grid>
                    <Grid item>
                        <img alt="PostgreSQL" src="https://raw.githubusercontent.com/cncf/landscape/ccd87077c2562474e239bc92d590b2bdcb5ba52f/hosted_logos/postgre-sql.svg"></img>
                    </Grid>
                    <Grid item>
                        <img alt="Firebase" src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/firebase-1.svg"></img>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={3} direction="column" spacing={4}>
                    <Grid item>
                        <Typography variant="h6">Certifications</Typography>
                    </Grid>
                    <Grid item>
                        <img alt="Android Development" src="https://www.vectorlogo.zone/logos/android/android-official.svg"></img>
                    </Grid>
                    <Grid item>
                        <img alt="Google Cloud Engineer" src="https://raw.githubusercontent.com/gilbarbara/logos/6a4ca0a0f3389cc3e244fcc0599fd3f021a86b07/logos/google-cloud.svg"></img>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={3} direction="column" spacing={4}>
                    <Grid item>
                        <Typography variant="h6">DevOps</Typography>
                    </Grid>
                    <Grid item>
                        <img alt="Docker" src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"></img>
                    </Grid>
                    <Grid item>
                        <img alt="Heroku" src="https://raw.githubusercontent.com/devicons/devicon/2809b567852a4648062a2d3e7c1c531367458c0b/icons/heroku/heroku-plain.svg"></img>
                    </Grid>
                    <Grid item>
                        <img alt="CircleC" src="https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/circleci.svg"></img>
                    </Grid>
                    <Grid item>
                        <img alt="Postman" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"></img>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}

export default Skills;