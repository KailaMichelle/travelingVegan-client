import React from 'react';
import CurrentUserRestaurants from './CurrentUserRestaurants';
import CurrentUserFavorites from './CurrentUserFavorites';
import { Container, Link } from '@material-ui/core';

import './Profile.css'

function CurrentUser(props){
    const restaurantList = props.restaurants.map((restaurantObj) => {
        return <CurrentUserRestaurants key={restaurantObj._id} restaurant={restaurantObj}/>
    });

    const favoriteList = props.favoriteRestaurants.map((favorites) => {
            return <CurrentUserFavorites key={favorites._id} favoriteList={favorites}/>
    })

    return(
       <div className="container">
           <Container fixed>
            <div>
                <h3 className="profile">Welcome {props.user.username}</h3>
            </div>
            <div>
                <h3 className="profile-labels">Your Contributions</h3>
            </div>
            {restaurantList}
            <div>
                <h3 className="profile-labels">Your Favorites</h3>
            </div>
            {favoriteList}
           </Container>
       </div>
    )
}

export default CurrentUser;