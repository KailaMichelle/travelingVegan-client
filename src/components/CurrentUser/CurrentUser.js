import React from 'react';
import CurrentUserRestaurants from './CurrentUserRestaurants';
import CurrentUserFavorites from './CurrentUserFavorites';
import RestaurantModel from '../../models/RestaurantModel';

function CurrentUser(props){

    const restaurantList = props.restaurants.map((restaurantObj) => {
        // console.log(restaurantObj)
        return <CurrentUserRestaurants key={restaurantObj._id} restaurant={restaurantObj}/>
    });


    const favoriteList = props.favoriteRestaurants.map((favorites) => {
            // console.log(favorites)
            return <CurrentUserFavorites key={favorites._id} favoriteList={favorites}/>
    })

    return(
       <div>
           {props.user.email}
           {restaurantList}
           {favoriteList}
       </div>
    )
}

export default CurrentUser;