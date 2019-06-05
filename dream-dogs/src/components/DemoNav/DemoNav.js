import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

function DemoNav() {
    return (
        <nav role="navigation">
            <ul>
                <li id='title'><Link to='/'>Dream Dogs</Link></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/addPost'>Create a post</Link></li>
                <li><Link to='/myPost'>My posts</Link></li>
                {TokenService.hasAuthToken() ? 
                <li><Link to='/login'>Log Out</Link></li> : 
                <li><Link to='/login'>Log in</Link></li>}
            </ul>            
        </nav>
    )
}

export default DemoNav;