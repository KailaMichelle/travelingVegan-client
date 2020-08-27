import React, { Component } from 'react';
import RestaurantModel from '../../../models/RestaurantModel';

class EditRestaurantContainer extends Component {
    state = {
        name: '',
        location: '',
        fullyVegan: false,
        image: '',
    };

    componentDidMount(){
        RestaurantModel.getRestaurantById(this.props.match.params.id)
        .then((result) => this.setState(result))
        .catch((err) => console.log(err));
    }

    handleChange = (e) => {
        if(e.target.value === 'on'){
            e.target.value = true;
        }
        this.setState({[e.target.name]: e.target.value})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        RestaurantModel.updateRestaurant(this.state, this.props.match.params.id)
            .then((result) => {
                console.log(result);
                this.setState({result})
            });
        this.props.history.push(`/restaurants/${this.props.match.params.id}`);
    }

    render(){
        const { name, location, fullyVegan, image } = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Edit Reccomendation</h2>
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
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditRestaurantContainer;