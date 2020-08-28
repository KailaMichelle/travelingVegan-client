import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RestaurantListContainer from '../containers/RestaurantContainers/RestaurantListContainer/RestaurantListContainer';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import UserContainer from '../containers/UsersContainers/ProfilesContainer/ProfilesContainer';
import CurrentUserContainer from '../containers/UsersContainers/CurrentUserContainer/CurrentUserContainer';
import NewRestaurantContainer from '../containers/RestaurantContainers/NewRestaurantContainer/NewRestaurantContainer';
import RestaurantContainer from '../containers/RestaurantContainers/RestaurantContainer/RestaurantContainer';
import EditRestaurantContainer from '../containers/RestaurantContainers/EditRestaurantContainer/EditRestaurantContainer';
import HomeContainer from '../containers/HomeContainer/HomeContainer';

export default ({ currentUser, setCurrentUser }) => (
    <Switch>
        {/* HOME ROUTE */}
        <Route exact path='/' component={HomeContainer} />

        {/* RESTAURANT ROUTES */}
        <Route exact path='/restaurants/new' render={() => <NewRestaurantContainer currentUser={currentUser}/> } />
        <Route path='/restaurants/:id/edit' component={EditRestaurantContainer} />
        <Route path='/restaurants/:id' component={RestaurantContainer} />
        <Route exact path='/restaurants' render={() => <RestaurantListContainer currentUser={currentUser} />}/>

        {/* USER ROUTES */}
        <Route path='/profiles/:id' component={CurrentUserContainer} />
        <Route path='/profiles' component={UserContainer} />

        {/* AUTH */}
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser}/> } />
        <Route path='/signup' render={() => <Signup setCurrentUser={setCurrentUser}/> } />

    </Switch>
)

