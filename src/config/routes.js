import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home/Home';
// import UserProfile from '../components/Profile/UserProfile';
import Restaurant from '../components/Restaurants/Restaurants';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';

export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/restaurants' component={Restaurant} />
        {/* <Route path='/profile' component={UserProfile} /> */}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
    </Switch>
)

