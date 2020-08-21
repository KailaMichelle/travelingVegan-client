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