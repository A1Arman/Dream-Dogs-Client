import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './MainNav.css';
import logo from '../../images/dog.svg';

function MainNav() {
    // return (
    //     // <nav role="navigation" className='topnav' id='myTopnav'>
    //     //     <ul>
    //     //         <li id='title'><Link to='/'>Dream Dogs</Link></li>
    //     //         <li id='icon'><img src={logo} alt='dream dogs icon/logo'/></li>
    //     //         <li><Link to='/posts'>Demo</Link></li>
    //     //         <li><a href="#signup_form">Sign Up</a></li>
    //     //     </ul>           
    //     // </nav>
    // )
    return (
        <>
            <Link to='/'><img src={logo} alt='dream dogs icon/logo'/></Link>
            <Menu>
                <Link to='/' id="home" className="menu-item">Home</Link><br />
                <Link id="about" className="menu-item" to='/posts'>Demo</Link><br />
                <Link id="contact" className="menu-item" to='#signup_form'>Sign Up</Link>
            </Menu>
        </>   
      );
}

export default MainNav;