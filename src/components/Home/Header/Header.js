import React from 'react';
import { Container } from '@material-ui/core';

import './Header.css'

function Header(){
    return(
        <div className="container">
            <Container fixed>
            <div className="container-content">
                <h1>Welcome to Traveling Vegan</h1>
            </div>
            </Container>
        </div>
    )
}

export default Header;