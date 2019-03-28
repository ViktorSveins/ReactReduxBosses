import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
    return (
        <ul className="navbar-nav mr-auto">
            <li>
                <NavLink exact to="/" className="navbar-brand">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/bosses" className="nav-link">Bosses</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;