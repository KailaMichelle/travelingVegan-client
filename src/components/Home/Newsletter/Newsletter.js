import React from 'react';
import { Container } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './Newsletter.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));


function Newsletter(){

    const classes = useStyles();

    return(
        <div className="container">
            <Container fixed>
            <div className="container-content">
            <h3>Sign Up For Our Weekly Newsletter!</h3>
            <form className={classes.root} noValidate autoComplete="off">
                {/* <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" /> */}
                <TextField error id="outlined-basic" label="Email" variant="outlined" />
                <TextField
          error
          id="standard-error-helper-text"
          label="Error"
          defaultValue="Hello World"
          helperText="Incorrect entry."
        />
            </form>
            </div>
            </Container>
        </div>
    )
}

export default Newsletter;