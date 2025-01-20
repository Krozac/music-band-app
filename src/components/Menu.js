import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/photo" activeClassName="active-link">
            Gallery
          </NavLink>
        </li>
       <li>
          <NavLink to="/album" activeClassName="active-link">
            Discography
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
