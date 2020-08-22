import React from 'react';
import Restaurants from '../../components/Restaurants/Restaurants';
import RestaurantModel from '../../models/RestaurantModel';

class RestaurantListContainer extends React.Component {
    state = {
        restaurants: [],
    };

    componentDidMount(){
        RestaurantModel.getAllRestaurants()
            .then((result) => {
                this.setState({restaurants: result});
            })
            .catch((err) => console.log(err))
    }

    render(){
        return <Restaurants restaurants={this.state.restaurants} />
    }
}

export default RestaurantListContainer;


// Think of container like the div that holds everything. This Div is a class that has state and methods that it can pass to it's children so they can render a "view" and pass it back to the container