import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserModel from '../../models/UserModel';

class Restaurant extends Component{
    state = {
        favoriteRestaurants: [],
    };

    deleteClicked = (e) => {
        this.props.deleteRestaurant(e.target.value)
    }

    likeClicked = (e) => {
        console.log(this.state)
        console.log('like clicked')
        this.setState({favoriteRestaurants: e.target.value}, () => {
            console.log(this.state)
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
            UserModel.removeFavorite(this.state, this.props.currentUser)
            .then((result) => {
                console.log(result);
                this.setState({result})
            });
        });
    }

    render(){
       const { restaurant } = this.props
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
                <button onClick={this.deleteClicked}  value={restaurant._id}>Delete</button>
            <Link to={`/restaurants/${restaurant._id}/edit`}>Edit</Link>
            </div>
        )
    }

}

export default Restaurant;
