import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserModel from '../../models/UserModel';
import { Container, Button } from '@material-ui/core';

import './Restaurant.css'
import DefaultImage from '../../images/vegan.jpg'

class Restaurant extends Component{
    state = {
        favoriteRestaurants: [],
        message: '',
    };

    deleteClicked = (e) => {
        console.log(this.props.deleteRestaurant)
        this.props.deleteRestaurant(e.target.value)
    }

    likeClicked = (e) => {
        console.log(this.state)
        console.log('like clicked')
        this.setState({message: 'Added to favorites!'})
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
        this.setState({message: 'Removed from favorites!'})
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
       const { restaurant, list, currentUser, error } = this.props
        return (
            <div className="container">
            <Container fixed>
            <div className="restaurant-container">
                <ul className="restaurant">
                    <li className="restaurant-list"> 
                        <h4 id="label">{restaurant.name} <br></br>{restaurant.location}</h4>
                        <Link to={`/restaurants/${restaurant._id}`} onClick={this.checkList} restaurant={restaurant._id} value={restaurant._id} currentUser={currentUser}>
                        <img src={restaurant.image ? restaurant.image : DefaultImage} alt={restaurant.name} className="restaurant-image"/></Link>
                    </li>
                </ul>
                <div className="buttons">
                <h3 className="highlight">{this.state.message}</h3>
                </div>
                <div className={currentUser ? 'buttons' : 'hidden'}> 
                    <button className="button2" value={restaurant._id} onClick={this.likeClicked} >Add to Favorites</button>
                    <button className="button2" value={restaurant._id} onClick={this.dislikeClicked} >Remove from Favorites</button>
                    <button className="button2" onClick={this.deleteClicked} value={restaurant._id} currentUser={currentUser}>Delete</button>
                    <Link to={`/restaurants/${restaurant._id}/edit`}><button className="button2" >Edit</button></Link>
                </div>
                <h3 className="highlight">{error}</h3>
                {!list && (
                    <h3 className="highlight">{restaurant.description}</h3>
                )}
                <div>

                </div>
            </div>
            </Container>
            </div>
        )
    }
}

export default Restaurant;
