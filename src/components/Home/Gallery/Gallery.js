import React from 'react';
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container'

import './Gallery.css'
import DefaultImage from '../../../images/vegan.jpg'


function Gallery(props){

    const restaurantImg = props.restaurants.map((restaurantObj) => {
       return <li><Link to={`/restaurants/${restaurantObj._id}`}><img src={restaurantObj.image ? restaurantObj.image : DefaultImage} alt='alt' className="gallery"/></Link></li>
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


