import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar({ currentUser, logout }) {
    const link = `profiles/${currentUser}`
    return (
        <nav>
            <div className="container">
                <NavLink to='/'>
                    <h3>LOGO</h3>
                </NavLink>
                <ul>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/restaurants'>Restaurants</NavLink>
                    </li>
                    {!currentUser && (
                    <React.Fragment>
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>Sign Up</NavLink>
                    </li>
                    </React.Fragment>
                    )}
                    {currentUser && (
                        <React.Fragment>
                    <li>
                        <NavLink to={link}>Profile</NavLink>
                    </li>
                    <li>
                        <span onClick={logout}>Log Out</span>
                    </li>
                        </React.Fragment>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;