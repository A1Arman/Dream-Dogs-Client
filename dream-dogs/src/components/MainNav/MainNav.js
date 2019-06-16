import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './MainNav.css';
import logo from '../../images/dog.svg';
import TokenService from '../../services/token-service';

function MainNav(props) {
    return (
        <>
            <Link to='/' className='nav-title'><img className='icon' src={logo} alt='dream dogs icon/logo'></img><span className='title'>Dream Dogs</span></Link>
            <Menu>
                <Link to='/' id="home" className="menu-item">Home</Link><br />
                <Link id="demo" className="menu-item" to='/posts'>Posts</Link><br />
                <Link id="signup" className="menu-item" to='/signup'>Sign Up</Link><br />
                {/*Line 16-19 checks to see if auth token is in browser to either render log in or log out link */}
                {TokenService.hasAuthToken() ? 
                    <Link to='/' className="menu-item" onClick={props.handleLogout}>Log out</Link>
                    : <Link id="login" className="menu-item" to='/login'>Log In</Link>
                }
                 
            </Menu>
        </>   
      );
}

export default MainNav;