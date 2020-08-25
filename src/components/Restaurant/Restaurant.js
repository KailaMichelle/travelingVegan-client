import React, { Component } from 'react';
import RestaurantModel from '../../models/RestaurantModel';
import UserModel from '../../models/UserModel';
import FavoriteRestaurant from './FavoriteRestaurant';

class Restaurant extends Component{
    // state = {
    //     user: this.props.currentUser,
    //     // restaurants: [],
    // };

    // componentDidMount(){
    //     UserModel.getUserById(this.props.currentUser._id)
    //         .then((result) => {
    //             this.setState({user: result});
    //             console.log(this.state.user)
    //             // this.getRestaurants();
    //         })
    //         .catch((err) => console.log(err))
    // }

    // handleClick = (e) => {
    //     // console.log(this.state.user)
    //     const user = this.state.user;
    //     // console.log('button clicked')
    //     // console.log(e.target.value)
    //     // console.log(this.state.user)
    //     RestaurantModel.getRestaurantById(e.target.value)
    //         .then((result) => {
    //             console.log(result)
    //             // result.user.favoriteRestaurants.push(result)
    //             // console.log(user._id)
    //             UserModel.update(user._id, result);
    //         })
    //         .catch((err) => console.log(err))
    // }

    // addLike = (articleId) => {
    //     console.log(articleId);
    //     // const article = this.state.filter((articleObj) => {
    //     //   return articleObj.id === articleId;
    //     // })[0];
    
    //     const article = this.state.articles.find((articleObj) => {
    //         return articleObj.id === articleId;
    //       });
    
    //       console.log(article);
    
    //     article.likes.push(1);
    
    //     this.setState({
    //       ...this.state.articles, // Spread operator: makes copies
    //      article,
    //     });
    //   }

    // deleteClicked = (e) => {
    //     this.props.deleteRestaurant(e.target.value)
    // }

    render(){
        return (
            <div>
                {this.props.restaurant.name}
                {this.props.restaurant.location}
                <img src={this.props.restaurant.image} alt=""/>
                {/* <button onClick={this.deleteClicked}  value={this.props.restaurant._id}>Delete</button> */}
                {/* <FavoriteRestaurant restaurant={this.props.restaurant} currentUser={this.props.currentUser}/> */}
                {/* <button onClick={this.handleClick} value={this.props.restaurant._id} name="favoriteRestaurants">Add to Favorites</button> */}
            </div>
        )
    }

}

export default Restaurant;
