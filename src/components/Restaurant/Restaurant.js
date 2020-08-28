import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserModel from '../../models/UserModel';

import './Restaurant.css'
import DefaultImage from '../../images/vegan.jpg'

class Restaurant extends Component{
    state = {
        favoriteRestaurants: [],
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
                            {!list && (
                                <div>
                                    {restaurant.name}{restaurant.location}
                                    <Link to={`/restaurants/${restaurant._id}/edit`}>Edit</Link>
                                </div>
                            )}
                    <ul>
                        <li>
                            <Link to={`/restaurants/${restaurant._id}`} onClick={this.checkList} restaurant={restaurant._id} value={restaurant._id} currentUser={currentUser}>
                            <img src={restaurant.image ? restaurant.image : DefaultImage} alt={restaurant.name}/></Link>
                            <div>
                                <button value={restaurant._id} onClick={this.likeClicked} className={currentUser ? 'show': 'hidden'}>Like</button>
                                <button value={restaurant._id} onClick={this.dislikeClicked} className={currentUser ? 'show': 'hidden'}>DisLike</button>
                                <button onClick={this.deleteClicked} value={restaurant._id}>Delete</button>
                            </div>
                        </li>
                    </ul>
                </div>
        )
    }
}

export default Restaurant;
