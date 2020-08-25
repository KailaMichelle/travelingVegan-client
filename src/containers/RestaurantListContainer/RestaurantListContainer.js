import React from 'react';
import Restaurants from '../../components/Restaurants/Restaurants';
import RestaurantModel from '../../models/RestaurantModel';
import Restaurant from '../../components/Restaurant/Restaurant';

class RestaurantListContainer extends React.Component {
    state = {
        restaurants: [],
        // user: this.props.currentUser,
    };

    componentDidMount(){
        RestaurantModel.getAllRestaurants()
            .then((result) => {
                this.setState({restaurants: result});
            })
            .catch((err) => console.log(err))
    }
    
    // componentDidUpdate(){
    //     RestaurantModel.getAllRestaurants()
    //         .then((result) => {
    //             this.setState({restaurants: result});
    //         })
    //         .catch((err) => console.log(err))
    // }


    // FILTER - if response 200 do this etc..
    // Is this efficient
    deleteRestaurant = (restaurant) => {
        RestaurantModel.deleteRestaurant(restaurant).then((res) => {
            // console.log('Deleted restaurant=', restaurant)
            RestaurantModel.getAllRestaurants()
            .then((result) => {
                this.setState({restaurants: result})
            })
            .catch((err) => console.log(err))
        })
        .catch((err) => console.log(err))
    }

    render(){
        return <Restaurants restaurants={this.state.restaurants} currentUser={this.props.currentUser} deleteRestaurant={this.deleteRestaurant}/>
    }
}

export default RestaurantListContainer;


// Think of container like the div that holds everything. This Div is a class that has state and methods that it can pass to it's children so they can render a "view" and pass it back to the container