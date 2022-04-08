import React from 'react';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user } = useFirebase();
    console.log(user)
    return (
        <div className='nav'>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/register'>Regester</NavLink>
            {
                user?.uid ? <button>log out</button> :
                <NavLink to='/login'>login</NavLink>}
        </div>
    );
};

export default Header;