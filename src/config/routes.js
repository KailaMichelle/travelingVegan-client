import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home/Home';
import Profile from '../components/Profile/Profile';
import RestaurantListContainer from '../containers/RestaurantListContainer/RestaurantListContainer';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import UserContainer from '../containers/UserContainer/UserContainer';

export default ({ currentUser, setCurrentUser }) => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/restaurants' component={RestaurantListContainer} />
        <Route path='/profile' component={Profile} />
        <Route path='/profiles' component={UserContainer} />
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser}/> } />
        <Route path='/signup' render={() => <Signup setCurrentUser={setCurrentUser}/> } />
    </Switch>
)

