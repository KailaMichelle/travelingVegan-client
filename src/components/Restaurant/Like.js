import React, { Component } from 'react'
import UserModel from '../../models/UserModel';

class Like extends Component {
    state = {
        favoriteRestaurants: [],
    };



    likeClicked = (e) => {
        this.setState({favoriteRestaurants: this.props.restaurantId})
        console.log('like clicked')
        UserModel.update(this.state, this.props.userId)
        .then((result) => {
            console.log(result);
            this.setState({result})
        });
    }

    // handleChange = (e) => {
    //     if(e.target.value === 'on'){
    //         e.target.value = true;
    //     }
    //     this.setState({[e.target.name]: e.target.value})
    // };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     RestaurantModel.updateRestaurant(this.state, this.props.match.params.id)
    //         .then((result) => {
    //             console.log(result);
    //             this.setState({result})
    //         });
    //     this.props.history.push(`/restaurants/${this.props.match.params.id}`);
    // }

    render(){

        // const { userId, restaurantId } = this.state;
        return(
            <div>
                <button onClick={this.likeClicked}>Like</button>
            </div>
        )
    }
}


export default Like
