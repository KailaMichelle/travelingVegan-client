import React, { useEffect }  from 'react';
import RestaurantModel from '../../models/RestaurantModel';
import UserModel from '../../models/UserModel';
import FavoriteModel from '../../models/FavoriteModel';
// import axios from 'axios';

class FavoriteRestaurant extends React.Component{
    state = {
        user: this.props.currentUser,
        favoriteRestaurants: '',
    }

    // state = {
    //     name: '',
    //     location: '',
    //     fullyVegan: false,
    //     image: '',
    // };

    // handleChange = (e) => {
    //     if(e.target.value === 'on'){
    //         e.target.value = true;
    //     }
    //     this.setState({[e.target.name]: e.target.value})
    // };

    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     RestaurantModel.createRestaurant(this.state)
    //         .then((result) => {
    //             console.log(result);
    //         });
    //     this.props.history.push('/restaurants');
    // }



    handleClick = (e) => {
            // console.log(this.props.currentUser)
            // const user = this.state.user;
            // console.log('button clicked')
            // console.log(e.target.value)
            // console.log(this.state.user)
        this.setState({favoriteRestaurants: e.target.value})
        console.log(this.state.favoriteRestaurants)
        UserModel.update(this.state)
        // RestaurantModel.getRestaurantById(e.target.value)
            .then((result) => {
                // FavoriteModel.createFavorite(result.name)
                // this.setState({favoriteRestaurants: result})

                // result.user.favoriteRestaurants.push(result)
                // console.log(this.props.currentUser._id)
                // UserModel.update(this.state);
                // console.log
            })
            .catch((err) => console.log(err))
        // UserModel.getUserById(this.props.currentUser)
        // .then((result) => {
        //     // console.log(result)
        //     this.setState({
        //         user: result
        //     })
        // })
        // .catch((err) => console.log(err))

        
        }
        
    // getUser = (e) => {
    //     UserModel.getUserById(e)
    //         .then((result) => {
    //             console.log(e)
    //         })
    //         .catch((err) => console.log(err))
    // }

    
render(){
    // console.log(this.state.favoriteRestaurants)
    return (
        <div>
            <button onClick={this.handleClick} value={this.props.restaurant._id} name='favoriteRestaurants'>Add to Favorites</button>

        </div>
    )   
    }
}

export default FavoriteRestaurant;
