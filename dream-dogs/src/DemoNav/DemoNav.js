import React from 'react';
import { Link } from 'react-router-dom';

function DemoNav() {
    return (
        <nav role="navigation">
            <ul>
                <li id='title'><Link to='/'>Dream Dogs</Link></li>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/addPost'>Create a post</Link></li>
            </ul>            
        </nav>
    )
}

export default DemoNav;