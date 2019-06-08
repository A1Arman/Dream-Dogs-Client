import React from 'react';
import { Link } from 'react-router-dom'

function LoggedInNav(props) {
    return (
        <>
            <li><Link to='/addPost'>Create a post</Link></li>
            <li><Link to='/myPost'>My posts</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li onClick={props.handleLogout}><Link to='/posts'>Log Out</Link></li> 
        </>
    )
}

export default LoggedInNav;