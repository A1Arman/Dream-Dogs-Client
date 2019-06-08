import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import LoggedInNav from '../LoggedInNav/LoggedInNav';
import logo from '../../images/dog.svg';
import './DemoNav.css';

function DemoNav(props) {
    return (
        <nav role="navigation">
            <ul>
                <li id='title'><Link to='/'>Dream Dogs</Link></li>
                <li id='icon' ><Link to='/posts' className='icon'><img src={logo} alt='dream dogs icon/logo'/></Link></li>
                {TokenService.hasAuthToken() ? 
                    <LoggedInNav handleLogout={props.handleLogout}/>
                    : 
                    <li><Link to='/login'>Log in</Link></li>
                }
            </ul>            
        </nav>
    )
}

export default DemoNav;