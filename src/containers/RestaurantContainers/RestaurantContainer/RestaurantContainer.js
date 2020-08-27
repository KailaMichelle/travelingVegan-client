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
                // console.log(result)
                this.setState({restaurant: result});
            })
            .catch((err) => console.log(err))
    }

    render(){
        // console.log(this.props)
        return <Restaurant restaurant={this.state.restaurant} list={false}/>
    }
}

export default RestaurantContainer;