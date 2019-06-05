import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import LoggedInNav from '../LoggedInNav/LoggedInNav';

function DemoNav(props) {
    return (
        <nav role="navigation">
            <ul>
                <li id='title'><Link to='/'>Dream Dogs</Link></li>
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