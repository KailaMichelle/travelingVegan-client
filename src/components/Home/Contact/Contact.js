import React from 'react';
import { Container, TextField, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import './Contact.css'

class Contact extends React.Component{
    state = {
        sent: false,
    }

    contactSent = () => {
        this.setState({sent: true});
    }


    render(){
        return(
            <div className="container contact-container">
                <Container fixed>
                <div className="container-content">
                    <h3 className={this.state.sent ? 'hidden': 'contact'}>Contact</h3>
                    <p className={this.state.sent ? 'hidden': 'contact-p hightlight'}>Have any Questions or Suggestions on Featured Spots?</p>
                    <p className={this.state.sent ? 'hidden': 'contact-p2'}>Send me an email to connect!</p>
                    <form className="form">
                        <div className={this.state.sent ? 'hidden': 'contact-form'}>
                            <TextField placeholder="Email" fullWidth/>
                        </div>
                        <div className={this.state.sent ? 'hidden': 'contact-form'}>
                            <TextField fullWidth multiline rows={4}/>
                        </div>
                        <div className={this.state.sent ? 'hidden': 'contact-form'}>
                            <div className="send">
                                <IconButton onSubmit="submit" onClick={this.contactSent}>
                                    <SendIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </form>
                    <h3 className={this.state.sent ? 'show': 'hidden'}>Thank's for contacting me, I'll be in touch!</h3>
                <div>
                </div>
                </div>
                </Container>
            </div>
        )
    }
}

export default Contact;