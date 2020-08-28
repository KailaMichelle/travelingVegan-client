import React from 'react';
import UserModel from '../../../models/UserModel';
import CurrentUser from '../../../components/CurrentUser/CurrentUser';

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
    }

    getFavorites(){
        this.setState({favoriteRestaurants: this.state.user.favoriteRestaurants})
    }

    
    render(){
        return <CurrentUser user={this.state.user} restaurants={this.state.restaurants} favoriteRestaurants={this.state.favoriteRestaurants}/>
    }
}

export default CurrentUserContainer;