import React from 'react';
import Restaurant from './Restaurant';
import { Container } from '@material-ui/core';

function Restaurants(props){

    const restaurantList = props.restaurants.map((restaurantObj) => {
        return <Restaurant 
        key={restaurantObj._id} 
        restaurant={restaurantObj} 
        list={true} 
        currentUser={props.currentUser} 
        deleteRestaurant={props.deleteRestaurant}/>
    });

    return (
        <div className="container">
            <Container fixed>
                <div>
                    <h2>Los Angeles</h2>
                    <h4>Check out our favorite spots!</h4>
                </div>
                <div>
                    {restaurantList}
                </div>
            </Container>
        </div>
    )
}

export default Restaurants;
