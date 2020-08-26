import React from 'react';

function CurrentUserFavorites(props){
    const { favoriteList } = props;
    // console.log(props.favoriteList.name)

    return (
        <div>
            
            {favoriteList.name}
            {favoriteList.location}
            <img src={favoriteList.image} alt=""/>
        </div>
        )
}

export default CurrentUserFavorites;