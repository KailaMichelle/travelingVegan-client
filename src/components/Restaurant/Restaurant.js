import React from 'react';

function Restaurant(props){
    const { restaurant } = props;

    return (
        <div>
            {restaurant.name}
            <img src={restaurant.image} alt=""/>

        </div>
    )
}

export default Restaurant;
