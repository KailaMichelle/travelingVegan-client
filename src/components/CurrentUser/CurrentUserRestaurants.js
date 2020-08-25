import React from 'react';

function CurrentUserRestaurants(props){
    const { restaurant } = props;

    return (
        <div>
            {restaurant.name}
            {restaurant.location}
            <img src={restaurant.image} alt=""/>

        </div>
    )
}

export default CurrentUserRestaurants;
