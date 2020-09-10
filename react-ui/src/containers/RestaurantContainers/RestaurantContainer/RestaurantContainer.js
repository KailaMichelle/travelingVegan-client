import React from 'react';
import Restaurant from '../../../components/Restaurant/Restaurant';
import RestaurantModel from '../../../models/RestaurantModel';

class RestaurantContainer extends React.Component {
    state = {
        restaurant: {},
    };

    componentDidMount(){
        RestaurantModel.getRestaurantById(this.props.match.params.id)
            .then((result) => {
                this.setState({restaurant: result});
            })
            .catch((err) => console.log(err))
    }

    render(){
        return <Restaurant restaurant={this.state.restaurant} list={false}/>
    }
}

export default RestaurantContainer;