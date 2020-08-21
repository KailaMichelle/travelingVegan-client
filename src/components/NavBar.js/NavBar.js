import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
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
                        <NavLink to='/restaurant'>Restaurants</NavLink>
                    </li>
                    <li>
                        <NavLink to='/login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>Sign Up</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;