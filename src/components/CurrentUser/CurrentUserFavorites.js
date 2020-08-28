import React from 'react';
import { Container, Link } from '@material-ui/core';

import DefaultImage from '../../images/vegan.jpg'

function CurrentUserFavorites(props){
    const { favoriteList } = props;

    return (
        <div className="container">
        <Container fixed>
        <div className="restaurant-container">
            <ul className="restaurant">
                <li className="restaurant-list"> 
                    <h4 id="label">{favoriteList.name} <br></br>{favoriteList.location}</h4>
                    <Link to={`/restaurants/${favoriteList._id}`} restaurant={favoriteList._id} value={favoriteList._id}>
                    <img src={favoriteList.image ? favoriteList.image : DefaultImage} alt={favoriteList.name} className="restaurant-image"/></Link>
                    <h3 className="highlight">{favoriteList.description}</h3>
                </li>
            </ul>
        </div>
        </Container>
    </div>
    )
}

export default CurrentUserFavorites;