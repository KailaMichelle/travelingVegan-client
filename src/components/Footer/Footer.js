import React from 'react';
import { Link } from 'react-router-dom';
// MATERIAL UI IMPORTS 
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Grid } from '@material-ui/core'; 
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
      width: 500,
      alignItems: 'center',
    },
    footer: {
        background: 'var(--mustard)',
        height: '20vh',
    },
    icon: {
        color: 'var(--offwhite)',
        fontSize: '2rem',
        margin: '20px',
    }
  });

function Footer(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    
    return( 
        // <div className="footer">
            <Grid container justify="center" className={classes.footer}>
                <Grid container justify="center" value={value} onChange={(event, newValue) => {setValue(newValue)}} showLabels className={classes.root}>
                    <Link to="/">
                        <IconButton><FacebookIcon className={classes.icon}/></IconButton>
                    </Link>
                    <Link to="/">
                        <IconButton><InstagramIcon className={classes.icon}/></IconButton>
                    </Link>
                    <a href="https://github.com/KailaMichelle">
                        <IconButton><GitHubIcon className={classes.icon}/></IconButton>
                    </a>
                    <a href="https://www.linkedin.com/in/kailahobbs/">
                        <IconButton ><LinkedInIcon className={classes.icon}/></IconButton>
                    </a>
                </Grid>
            </Grid>
        // </div>
    )
}

export default Footer;