import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='nav'>
            <Link to='/'>home</Link>
            <Link to='/login'>login</Link>
        </div>
    );
};

export default Header;