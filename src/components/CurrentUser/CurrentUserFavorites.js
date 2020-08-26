import React from 'react';

function CurrentUserFavorites(props){
    const { favoriteList } = props

    

    return (
        <div>
            {favoriteList}
            {/* {restaurant.location}
            <img src={restaurant.image} alt=""/> */}

        </div>
    )
}

export default CurrentUserFavorites;