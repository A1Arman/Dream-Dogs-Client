import React from 'react';
import { Link } from 'react-router-dom';
import './AddPostNav.css';
import logo from '../../images/dog.svg';

function AddPostNav() {
    return (
        <nav role="navigation">
            <ul>
                <li id='title'><Link to='/'>Dream Dogs</Link></li>
                <li id='icon'><img src={logo} alt='dream dogs icon/logo'/></li>
                <li><Link to='/posts'>Posts</Link></li>
            </ul>            
        </nav>
    )
}

export default AddPostNav;