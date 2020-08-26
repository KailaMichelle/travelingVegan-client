import React from 'react';
import UserModel from '../../models/UserModel';
// import RestaurantModel from '../../models/RestaurantModel';
import CurrentUser from '../../components/CurrentUser/CurrentUser';

class CurrentUserContainer extends React.Component {
    state = {
        user: {},
        restaurants: [],
        favoriteRestaurants: [],
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
        this.getFavorites();
        // console.log(this.state.user.restaurants)
    }

    getFavorites(){
        this.setState({favoriteRestaurants: this.state.user.favoriteRestaurants})
        // console.log(this.state.user.favoriteRestaurants)
    }

    // handleChange = (e) => {
    //     // if(e.target.value === 'on'){
    //     //     e.target.value = true;
    //     // }
    //     this.setState({favoriteRestaurants: e.target.value})
    // };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     UserModel.updateUser(this.state.favoriteRestaurants)
    //         .then((result) => {
    //             console.log(result);
    //         });
    //     this.props.history.push('/');
    // }

    // likeRestaurant = (restaurant) => {
        
    // }

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
        return <CurrentUser user={this.state.user} restaurants={this.state.restaurants} favoriteRestaurants={this.state.favoriteRestaurants}/>
    }
}

export default CurrentUserContainer;