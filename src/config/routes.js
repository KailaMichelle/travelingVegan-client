import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import RestaurantListContainer from '../containers/RestaurantListContainer/RestaurantListContainer';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import UserContainer from '../containers/UserContainer/UserContainer';
import CurrentUserContainer from '../containers/CurrentUserContainer/CurrentUserContainer';
import NewRestaurantContainer from '../containers/NewRestaurantContainer/NewRestaurantContainer';

export default ({ currentUser, setCurrentUser }) => (
    <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route path='/restaurants/new' component={NewRestaurantContainer} /> */}

        <Route path='/restaurants/new' render={() => <NewRestaurantContainer currentUser={currentUser}/> } />
        <Route path='/restaurants' render={() => <RestaurantListContainer currentUser={currentUser} />}/>
        {/* CURRENT USER PROFILE PATH */}
        {/* <Route path='/profile' component={CurrentUserContainer}/> */}
        <Route path='/profiles/:id' component={CurrentUserContainer} />
        
        {/* ALL PROFILES*/}
        {/* <Route path='/profiles/:id' component={CurrentUserContainer} /> */}
        <Route path='/profiles' component={UserContainer} />

        {/* AUTH */}
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser}/> } />
        <Route path='/signup' render={() => <Signup setCurrentUser={setCurrentUser}/> } />
    </Switch>
)

