import React from 'react';
import UserModel from '../../models/UserModel';
// import RestaurantModel from '../../models/RestaurantModel';
import CurrentUser from '../../components/CurrentUser/CurrentUser';

class CurrentUserContainer extends React.Component {
    state = {
        user: {},
        restaurants: [],
    };

    componentDidMount(){
        UserModel.getUserById(this.props.match.params.id)
            .then((result) => {
                this.setState({user: result});
                console.log(this.state.user)
                this.getRestaurants();
            })
            .catch((err) => console.log(err))
    }

    getRestaurants(){
        this.setState({restaurants: this.state.user.restaurants})
        // console.log(this.state.user.restaurants)
    }

    // getRestaurants(){
    //     console.log(this.state.user.restaurants)
    //     this.state.user.restaurants.map((restaurantObj) => {
    //         RestaurantModel.getRestaurantById(restaurantObj)
    //         .then((restaurantObj) => {
    //             // console.log(restaurantObj)
    //             this.setState({
    //                 restaurants: restaurantObj
    //             })
    //         })
    //         .catch((err) => console.log(err))
    //     })}

    render(){
        // console.log(restaurantObj)
        return <CurrentUser user={this.state.user} restaurants={this.state.restaurants}/>
    }
}

export default CurrentUserContainer;