import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Like from './Like';
import UserModel from '../../models/UserModel';
import FavoriteModel from '../../models/FavoriteModel';

class Restaurant extends Component{
    state = {
        favoriteRestaurants: [],
        // userId: this.props.currentUser,
    };

    deleteClicked = (e) => {
        this.props.deleteRestaurant(e.target.value)
    }

    // like = (e) => {
    //     console.log(e.target.value)
    //     this.setState({favoriteRestaurants: e.target.value}, () => {
    //         console.log(this.state)
    //     });
    //     // console.log(this.props.currentUser)
    //     this.likeClicked();
    // }

//     if(e.target.value === 'on'){
//         e.target.value = true;
//     }
//     this.setState({[e.target.name]: e.target.value})
// };

    likeClicked = (e) => {
        console.log(this.state)
        console.log('like clicked')
        this.setState({favoriteRestaurants: this.props.restaurant}, () => {
            console.log(this.state)
            // FavoriteModel.createFavorite(this.state)
            UserModel.updateFavorite(this.state, this.props.currentUser)
            .then((result) => {
                console.log(result);
                this.setState({result})
            });
        });
    }


    dislikeClicked = (e) => {
        console.log(this.state)
        console.log('dislike clicked')
        this.setState({favoriteRestaurants: e.target.value}, () => {
            console.log(this.state)
            // FavoriteModel.createFavorite(this.state)
            UserModel.removeFavorite(this.state, this.props.currentUser)
            .then((result) => {
                console.log(result);
                this.setState({result})
            });
        });
    }

    render(){
       const { restaurant, lists, currentUser, like } = this.props
    //    console.log(currentUser)
        return (
            <div>
                <Link to={`/restaurants/${restaurant._id}`}>
                {restaurant.name}
            </Link>
                {restaurant.location}
                <img src={restaurant.image} alt=""/>
                <button value={restaurant._id} onClick={this.likeClicked}>Like</button>
                <button value={restaurant._id} onClick={this.dislikeClicked}>DisLike</button>
                {/* <Like userId={currentUser} restaurantId={restaurant._id}>Like</Like> */}
                <button onClick={this.deleteClicked}  value={restaurant._id}>Delete</button>
            <Link to={`/restaurants/${restaurant._id}/edit`}>Edit</Link>
            </div>
        )
    }

}

export default Restaurant;
