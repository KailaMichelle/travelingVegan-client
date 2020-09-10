import React, { Component } from 'react';
import RestaurantModel from '../../../models/RestaurantModel';
import { Button, Container } from '@material-ui/core';

class EditRestaurantContainer extends Component {
    state = {
        name: '',
        location: '',
        description: '',
        fullyVegan: false,
        image: '',
        error: '',
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
                this.props.history.push(`/restaurants/${this.props.match.params.id}`);
            })
            .catch((err) => {
                console.log(err)
                // console.log(result)
                  this.setState({error: `You can't edit someone else's post. Please login`});
                });
            }

    render(){
        const { name, location, fullyVegan, image } = this.state;
        return(
            <div className="reccomendation-container">
                <Container fixed>
                    <div className="container-content">
                        <h3 className="login2">Edit</h3>
                        <p className="error">{this.state.error}</p>
                        <form onSubmit={this.handleSubmit}>
                        <label className="labels">Name</label>
                        <div className="login-div">
                            <input type="text" name="name" onInput={this.handleChange}/>
                        </div>
                        <label className="labels">Location</label>
                        <div className="login-div">
                            <input type="text" name="location" onInput={this.handleChange}/>
                        </div>
                        <label className="labels">Image Url</label>
                        <div className="login-div">
                            <input type="text" name="image" onInput={this.handleChange}/>
                        </div>
                        <label className="labels">Website</label>
                        <div className="login-div">
                            <input type="text" name="website" onInput={this.handleChange}/>
                        </div>
                        <label className="labels">Description</label>
                        <div className="login-div">
                            <input type="textarea" name="description" onInput={this.handleChange}/>
                        </div>
                            <label className="labels-2">Fully Vegan?</label>
                            <input type="checkbox" name="fullyVegan" onInput={this.handleChange}/>
                        <div class="submit-btn">
                            <Button type="submit">Save</Button>
                        </div>
                    </form>
                    </div>
                </Container>
                </div>
        )
    }
}

export default EditRestaurantContainer;