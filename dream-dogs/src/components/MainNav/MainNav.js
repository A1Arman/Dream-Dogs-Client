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
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a className="menu-item--small" href="">Settings</a>
        </Menu>
      );
}

export default MainNav;