import React from 'react';
import { Link } from 'react-router-dom';
// MATERIAL UI IMPORTS 
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, Button, Input, Container, IconButton, TextField, Paper, Breadcrumbs, Grid } from '@material-ui/core'; 
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
      width: 500,
      alignItems: 'center',
    },
  });

function Footer(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    
    return( 
        <Grid container justify="center">
            <Grid container justify="center" value={value} onChange={(event, newValue) => {setValue(newValue)}} showLabels className={classes.root}>
                <Link to="/">
                    <IconButton><FacebookIcon /></IconButton>
                </Link>
                <Link to="/">
                    <IconButton><InstagramIcon /></IconButton>
                </Link>
                <Link to="/">
                    <IconButton><GitHubIcon /></IconButton>
                </Link>
                <Link to="/">
                    <IconButton><LinkedInIcon /></IconButton>
                </Link>
            </Grid>
        </Grid>
    )
}

export default Footer;