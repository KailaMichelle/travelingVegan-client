import React from 'react';
import { Container } from '@material-ui/core';

import './About.css'

function About(){
    return(
        <div className="container">
            <Container fixed>
            <div className="container-content">
                <div>
                    <h2>About</h2>
                </div>
                <div className="about-content text-content">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corporis eaque, quam distinctio non natus veniam officia! Voluptate iure harum, sed repellat eligendi ipsum distinctio repudiandae iste. Cupiditate, quam rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, placeat.</p>
                </div>
            </div>
            </Container>
        </div>
    )
}

export default About;