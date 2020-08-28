import React from 'react';
import { Container, Link } from '@material-ui/core';

import DefaultImage from '../../images/vegan.jpg'

function CurrentUserRestaurants(props){
    const { restaurant } = props;
    console.log(props)

    return (
        <div className="container">
            <Container fixed>
            <div className="restaurant-container">
                <ul className="restaurant">
                    <li className="restaurant-list"> 
                        <h4 id="label">{restaurant.name} <br></br>{restaurant.location}</h4>
                        <Link to={`/restaurants/${restaurant._id}`} restaurant={restaurant._id} value={restaurant._id}>
                        <img src={restaurant.image ? restaurant.image : DefaultImage} alt={restaurant.name} className="restaurant-image"/></Link>
                        <h3 className="highlight">{restaurant.description}</h3>
                    </li>
                </ul>
            </div>
            </Container>
        </div>
    )
}

export default CurrentUserRestaurants;
