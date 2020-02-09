import React from 'react';
import './css/navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = props => (
  <nav>
    <h2 className='logo'>{props.LogoTitle}</h2>
    <ul className='nav-menu'>
      <li>
        <NavLink className='nav' activeClassName='activate' exact to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className='nav' activeClassName='activate' to='/about'>
          About
        </NavLink>
      </li>
      <li>
        <NavLink className='nav' activeClassName='activate' to='/contact'>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink className='nav' activeClassName='activate' to='/projects'>
          Projects
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
