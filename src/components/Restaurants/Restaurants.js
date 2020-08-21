import React from 'react';
import Restaurant from '../Restaurant/Restaurant';

function Restaurants(props){
    const restaurantList = props.restaurants.map((restaurantObj) => {
        return <Restaurant key={restaurantObj._id} restaurant={restaurantObj} list={true} />
    });

    return (
        <div>
            {restaurantList}
        </div>
    )
}

export default Restaurants;
