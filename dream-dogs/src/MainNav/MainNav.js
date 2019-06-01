import React from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css'

function MainNav() {
    return (
        <nav role="navigation">
            <ul>
                <li id='title'><Link to='/'>Dream Dogs</Link></li>
                <li><Link to='/posts'>Demo</Link></li>
                <li><a href="#signup_form">Sign Up</a></li>
            </ul>            
        </nav>
    )
}

export default MainNav;