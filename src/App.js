import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import Routes from './config/routes';
import NavBar from './components/NavBar.js/NavBar';
import Footer from './components/Footer/Footer';
import setAuthHeader from './utils/setAuthHeader';
import './App.css';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('token')
  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    if(token){
      setAuthHeader(token);
      const decodedToken = jwt_decode(token);
      this.setState({currentUser: decodedToken.id})
    }
  }
  
  setCurrentUser = (token) => {
    localStorage.setItem('token', token);
    setAuthHeader(token);
    const decodedToken = jwt_decode(token);
    this.setState({currentUser: decodedToken.id})
  };

  logout = () => {
    localStorage.removeItem('token');
    setAuthHeader();
    this.setState({currentUser: ''})
    this.props.history.push('/');
  }

  render(){
    return (
      <React.Fragment>
        <NavBar currentUser={this.state.currentUser} logout={this.logout}/>
        <div className="App">
          <header className="App-header">
            <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser}/>
          </header>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
