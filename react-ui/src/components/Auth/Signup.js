import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { Container, Button } from '@material-ui/core';

class SignUp extends Component {
    state = {
        username:'',
        email:'',
        password:'',
        error: '',
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
                this.props.setCurrentUser(res.data.token);
                this.props.history.push('/');
            })
            .catch((err) => {
                console.log(err.response.status);
                console.log(err.response.data);
                console.log(err.response.data.message);
                this.setState({error: err.response.data.message});
            });
        }

        render(){
            return(
                <div className="login-container">
                <Container fixed>
                    <div className="container-content">
                        <h3 className="login">Sign Up</h3>
                        <form onSubmit={this.handleSubmit}>
                        <label htmlFor="username" className="labels">Username</label>
                        <div className="login-div">
                            <input onChange={this.handleChange} type="username" id="username" name="username" value={this.state.username}/>
                        </div>
                        <label htmlFor="email" className="labels">Email</label>
                        <div className="login-div">
                            <input onChange={this.handleChange} type="email" id="email" name="email" value={this.state.email}/>
                        </div>
                        <label htmlFor="password" className="labels">Password</label>
                        <div className="login-div">
                            <input onChange={this.handleChange} type="password" id="password" name="password" value={this.state.password} />
                        </div>
                        <p className="error">{this.state.error}</p>
                        <div class="submit-btn">
                            <Button type="submit">Sign Up</Button>
                        </div>
                    </form>
                    </div>
                </Container>
                </div>
            )
        }
}

export default withRouter(SignUp);