import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RestaurantModel from '../../../models/RestaurantModel';
import setAuthHeader from '../../../utils/setAuthHeader';

class NewRestaurantContainer extends Component {
    state = {
        name: '',
        location: '',
        fullyVegan: false,
        image: '',
        website: '',
        error: '',
    };

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
                console.log(result)
                this.props.history.push('/restaurants');
            })
            .catch((err) => {
            console.log(err)
            // console.log(result)
              this.setState({error: 'Something went wrong, please try again'});
            });
        }

    render(){
        return(
            <div>
                <p> {this.state.error}</p>
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
                        <label htmlFor="">Image Url</label>
                        <input type="text" name="image" onInput={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Website</label>
                        <input type="text" name="website" onInput={this.handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="">Fully Vegan?</label>
                        <input type="checkbox" name="fullyVegan" onInput={this.handleChange}/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(NewRestaurantContainer);