import React from 'react';
import Restaurant from './Restaurant';

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
        <div>
            {restaurantList}
        </div>
    )
}

export default Restaurants;
