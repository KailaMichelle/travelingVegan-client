import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RestaurantModel from '../../models/RestaurantModel';
import UserModel from '../../models/UserModel';

class NewRestaurantContainer extends Component {
    state = {
        name: '',
        location: '',
        fullyVegan: false,
        image: '',
        user: '',
    };

    // componentDidMount(){
    //     UserModel.getUserById(this.props.match.params.id)
    //         .then((result) => {
    //             console.log(result);
    //             this.setState({user: result});
    //         })
    //         .catch((err) => console.log(err))
    // }

    handleChange = (e) => {
        if(e.target.value === 'on'){
            e.target.value = true;
        }
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        RestaurantModel.createRestaurant(this.state)
            .then((result) => {
                console.log(result);
            });
        this.props.history.push('/restaurants');
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Add New Reccomendation</h2>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" onInput={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Location</label>
                        <input type="text" name="location" onInput={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Image</label>
                        <input type="text" name="image" onInput={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Fully Vegan?</label>
                        <input type="checkbox" name="fullyVegan" onInput={this.handleChange}/>
                    </div>
                    <select name="user" id="user">
                        <option value></option>
                    </select>
                    <div>
                        <button onSubmit="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(NewRestaurantContainer);