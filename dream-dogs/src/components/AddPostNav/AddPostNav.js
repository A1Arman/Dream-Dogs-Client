import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './AddPostNav.css';
import logo from '../../images/dog.svg';

function AddPostNav(props) {
    return (
        <>
            <img src={logo} alt='dream dogs icon'/>
            <Menu>
                <Link to='/posts' className='menu-item'>Posts</Link><br />
                <Link to='/myPost' className="menu-item">My Post</Link><br />
                <Link to='/profile' className="menu-item">Profile</Link><br />
                <Link to='/posts' className="menu-item" onClick={props.handleLogout}>Log out</Link>
            </Menu>
        </>
    )
}

export default AddPostNav;