import React from 'react';

function CurrentUserRestaurants(props){
    const { restaurant } = props;
    console.log(props)

    return (
        <div>
            YESSS
            {restaurant.name}
            {restaurant.location}
            <img src={restaurant.image} alt=""/>

        </div>
    )
}

export default CurrentUserRestaurants;
