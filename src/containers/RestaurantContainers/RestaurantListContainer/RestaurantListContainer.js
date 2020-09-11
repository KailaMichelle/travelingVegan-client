import React from 'react';
import Restaurants from '../../../components/Restaurant/Restaurants';
import RestaurantModel from '../../../models/RestaurantModel';


class RestaurantListContainer extends React.Component {
    state = {
        restaurants: [],
        error: '',
    };

    componentDidMount(){
        RestaurantModel.getAllRestaurants()
            .then((result) => {
                this.setState({restaurants: result});
            })
            .catch((err) => console.log(err))
    }

    deleteRestaurant = (restaurant) => {
        console.log('in delete')
        RestaurantModel.deleteRestaurant(restaurant).then((res) => {
            RestaurantModel.getAllRestaurants()
            .then((result) => {
                this.setState({restaurants: result})
            })
            .catch((err) => console.log(err))
            console.log('something went wrong')
        })
    }

    render(){
        return <Restaurants 
        restaurants={this.state.restaurants} 
        currentUser={this.props.currentUser} 
        deleteRestaurant={this.deleteRestaurant} 
        updateRestaurant={this.updateRestaurant}
        error={this.state.error}/>
    }
}

export default RestaurantListContainer;

// My understanding of a container - 
// Think of container like the div that holds everything. This Div is a class that has state and methods that it can pass to it's children so they can render a "view" and pass it back to the container