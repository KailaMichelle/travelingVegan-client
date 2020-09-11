import React from 'react';
import { Container, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';

import './Newsletter.css'


class Newsletter extends React.Component {
    state = {
        sent: false,
    }

    newsletterSent = () => {
        this.setState({sent: true});
    }


    render(){
        return(
            <div className="container newsletter-container">
                <Container fixed>
                <div className="container-content">
                    <h3 className={this.state.sent ? 'hidden': 'newsletter'}>Sign Up For Our Weekly Newsletter</h3>
                    <p className={this.state.sent ? 'hidden': 'newsletter-p'}>Stay in the loop with our favorite current spots. We won't forget the drinks!</p>
                    <form>
                        <div className={this.state.sent ? 'hidden': 'newsletter-form'}>
                            <TextField placeholder="Email"/>
                        </div>
                        <div className={this.state.sent ? 'hidden': 'newsletter-form'}>
                            <IconButton onSubmit="submit" onClick={this.newsletterSent}>
                                <SendIcon/>
                            </IconButton>
                        </div>
                    </form>
                    <h3 className={this.state.sent ? 'show': 'hidden'}>Newsletters Coming Soon!</h3>
                <div>
                </div>
                </div>
                </Container>
            </div>
        )
    }
}

export default Newsletter;