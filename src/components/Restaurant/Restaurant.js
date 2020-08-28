import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserModel from '../../models/UserModel';
import RestaurantShow from './RestaurantShow';
import Button from '@material-ui/core/Button'

import './Restaurant.css'

class Restaurant extends Component{
    state = {
        favoriteRestaurants: [],
        // list: false,
    };

    // componentDidMount(){
    //     UserModel.getUserById(this.props.currentUser)
    //     .then((result) => {
    //         this.setState({favoriteRestaurants: result.favoriteRestaurants})
    //         // this.checkList();
    //     })
    // // }

    // checkList = (e) => {
    //     console.log(e.target.value)
    //     this.state.favoriteRestaurants.map((restaurantObj) => {
    //     if(e.target.value = restaurantObj._id){
    //         this.setState({list: true})
    //     } else {
    //         this.setState({list: false})
    //     }
    //     console.log('hi', this.state);
    // })
    // }


    deleteClicked = (e) => {
        this.props.deleteRestaurant(e.target.value)
    }

    likeClicked = (e) => {
        console.log(this.state)
        console.log('like clicked')
        // this.setState({list: true})
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
        // this.setState({list: false})
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
       const { restaurant, list, currentUser } = this.props
        return (
            <div>
                <div>
                    {!list && (
                    <>
                    <button value={restaurant._id} onClick={this.likeClicked} >Like</button>
                    <button value={restaurant._id} onClick={this.dislikeClicked} >DisLike</button>
                    </>
                    )}
                    <button onClick={this.deleteClicked}  value={restaurant._id}>Delete</button>
                </div>
                <div>
                <Link to={`/restaurants/${restaurant._id}`} onClick={this.checkList} restaurant={restaurant._id} value={restaurant._id} currentUser={currentUser}>
                    {restaurant.name}
                </Link>
                    {restaurant.location}
                    <img src={restaurant.image} alt=""/>
                <Link to={`/restaurants/${restaurant._id}/edit`}>Edit</Link>
                </div>
            </div>
        )
    }
}

export default Restaurant;
