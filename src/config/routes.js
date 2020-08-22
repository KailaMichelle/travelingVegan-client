import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home/Home';
import Profiles from '../components/Profiles/Profiles';
import RestaurantListContainer from '../containers/RestaurantListContainer/RestaurantListContainer';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import UserContainer from '../containers/UserContainer/UserContainer';

export default ({ currentUser, setCurrentUser }) => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/restaurants' component={RestaurantListContainer} />
        <Route path='/profiles' component={UserContainer} />
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser}/> } />
        <Route path='/signup' component={Signup} />
    </Switch>
)

