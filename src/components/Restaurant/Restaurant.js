import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import RestaurantModel from '../../models/RestaurantModel';
import UserModel from '../../models/UserModel';
import FavoriteRestaurant from './FavoriteRestaurant';
import EditForm from './EditRestaurant';
import EditRestaurant from './EditRestaurant';

class Restaurant extends Component{
    // state = {
    //     formStyle: {
    //         display: 'none',
    //     },
    //     // user: this.props.currentUser,
    //     // restaurants: [],
    // };

    // toggleBodyForm = () => {
    //     this.state.formStyle.display === 'block'
    //     ? this.setState({ formStyle: {display:'none'}})
    //     : this.setState({ formStyle: {display:'block'}})
    // }

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

    deleteClicked = (e) => {
        this.props.deleteRestaurant(e.target.value)
    }

    render(){
       const { restaurant, lists } = this.props
        return (
            <div>
                <Link to={`/restaurants/${restaurant._id}`}>
                {restaurant.name}
            </Link>
                {restaurant.location}
                <img src={restaurant.image} alt=""/>
                <button onClick={this.deleteClicked}  value={restaurant._id}>Delete</button>
                {/* <FavoriteRestaurant restaurant={this.props.restaurant} currentUser={this.props.currentUser}/> */}
                {/* <button onClick={this.handleClick} value={this.props.restaurant._id} name="favoriteRestaurants">Add to Favorites</button> */}
            {/* <Redirect to={`restaurants/${this.props.restaurant._id}`}> */}
{/*             
            {!this.props.list && (
                <>
            <button onClick={this.toggleBodyForm} value={this.props.restaurant}>
                Edit
            </button>
                </>
            )} */}
            {/* </Redirect> */}
            <Link to={`/restaurants/${restaurant._id}/edit`}>Edit</Link>
            {/* <EditForm restaurant={this.props.restaurant} style={this.state.formStyle} autoFocus={true} 
            buttonName="update restaurant"
            updateRestaurant={this.props.updateRestaurant}
            toggleBodyForm={this.toggleBodyForm}/> */}
            </div>
        )
    }

}

export default Restaurant;
