import React from 'react';
import { Container } from '@material-ui/core';

import './About.css'

function About(){
    return(
        <div className="container container-about">
            <Container fixed>
            <div className="container-content">
                <div>
                    <h2 className="about">Thanks for stopping by..</h2>
                </div>
                <div className="about-content text-content">
                    <p className="paragraph p-about">Ever travel and can't find Vegan food? Get reccomendations from searches and they just aren't that great? We know it's a struggle. That's why we're here! We have created a community for you to share your favorite vegan spots and have access to a community of shared reccomendations from real people. Check it out below and don't forget to sign up for our newsletter for weekly highlights!</p>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default About;