import React from 'react';
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'

import './Gallery.css'


function Gallery(props){

    const restaurantImg = props.restaurants.map((restaurantObj) => {
       return <li><Link to={`/restaurants/${restaurantObj._id}`}><img src={restaurantObj.image} alt='alt' className="gallery"/></Link></li>
    });
    
    return (
        <div className="container">
            <Container fixed>
                <div className="gallery-container">
                    <ul>
                        {restaurantImg}
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Gallery;


