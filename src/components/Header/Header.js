import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='nav'>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/register'>Regester</NavLink>
            <NavLink to='/login'>login</NavLink>
        </div>
    );
};

export default Header;