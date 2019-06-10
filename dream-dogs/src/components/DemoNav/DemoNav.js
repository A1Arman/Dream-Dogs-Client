import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import LoggedInNav from '../LoggedInNav/LoggedInNav';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../images/dog.svg';
import './DemoNav.css';

function DemoNav(props) {
    return (
        <>
            <Link to='/'><img src={logo} alt='dream dogs icon/logo'/></Link>
        <>
            {TokenService.hasAuthToken() ?
                <LoggedInNav handleLogout={props.handleLogout} /> 
                :
                <Menu><Link to='/login' className="menu-item">Log In</Link></Menu>
            }
        </>
        </>
      );
}

export default DemoNav;