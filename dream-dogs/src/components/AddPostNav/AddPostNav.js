import React from 'react';
import { Link } from 'react-router-dom';


function AddPostNav() {
    return (
        <nav role="navigation">
            <ul>
                <li id='title'><Link to='/'>Dream Dogs</Link></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
            </ul>            
        </nav>
    )
}

export default AddPostNav;