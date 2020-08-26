import React from 'react';
import CurrentUserRestaurants from './CurrentUserRestaurants';
import CurrentUserFavorites from './CurrentUserFavorites';
import RestaurantModel from '../../models/RestaurantModel';

function CurrentUser(props){
    // console.log(props.restaurants);

    const restaurantList = props.restaurants.map((restaurantObj) => {
        // console.log(restaurantObj)
        return <CurrentUserRestaurants key={restaurantObj._id} restaurant={restaurantObj}/>
    });


    const favoriteList = props.favoriteRestaurants.map((favorites) => {
        // RestaurantModel.getRestaurantById(favorites).then((res => {
            console.log(favorites)
            // return res
            return <CurrentUserFavorites key={favorites._id} favoriteList={favorites}/>
            // this.setState({favoriteRestaurants: res})
            // console.log(this.state.favoriteRestaurants)
        // })) 
        // return <CurrentUserFavorites key={res._id} favoriteList={res}/>
    })
    // const favoriteList = props.favoriteRestaurants.map((favoriteObj) => {
    //     return <CurrentUserFavorites key={favoriteObj._id} favoriteList={favoriteObj}/>
    // })
    
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