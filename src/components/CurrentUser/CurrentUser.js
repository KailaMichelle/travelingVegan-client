import React from 'react';
import CurrentUserRestaurants from './CurrentUserRestaurants';
import CurrentUserFavorites from './CurrentUserFavorites';

function CurrentUser(props){
    // console.log(props.restaurants);

    const restaurantList = props.restaurants.map((restaurantObj) => {
        // console.log(restaurantObj)
        return <CurrentUserRestaurants key={restaurantObj._id} restaurant={restaurantObj}/>
    });

    const favoriteList = props.favoriteRestaurants.map((favoriteObj) => {
        return <CurrentUserFavorites key={favoriteObj._id} favoriteList={favoriteObj}/>
    })
    
    // let name = '';
    // Object.keys(props.restaurants).map(function(key) {
    //     // const name = props.restaurants[key.name]
    //     // const location = props.restaurants[key.location]
    //     if(key === "name"){
    //         name = props.restaurants[key]
    //         console.log(name)
    //     }
    //     console.log(key)
    // })

    console.log(props.restaurants);
    return(
       <div>
           {/* {props.user.username} */}
           {props.user.email}
           {/* {props.user.restaurants} */}
           {/* {keys} */}
           {/* {props.user.restaurants} */}
           {/* {name} */}
           {restaurantList}
           {favoriteList}
       </div>
    )
}

export default CurrentUser;