import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class SignUp extends Component {
    state = {
        username:'',
        email:'',
        password:'',
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/user/signup`, this.state)
            .then((res) => {
                console.log(res);
                this.props.history.push('/');
            })
            .catch((err) => {
                console.log(err.response.status);
                console.log(err.response.data);
                console.log(err.response.data.message);
            });
        }

        render(){
            return(
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input onChange={this.handleChange} type="username" id="username" name="username" value={this.state.username} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input onChange={this.handleChange} type="email" id="email" name="email" value={this.state.email} />
                    </div>
                    <div>
                    <label htmlFor="password">Password</label>
                        <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            )
        }
}

export default withRouter(SignUp);