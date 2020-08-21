import React from 'react';

function Restaurant(props){
    const { restaurant, list } = props;

    return (
        <div>
            {restaurant.name}

        </div>
    )
}

export default Restaurant;
