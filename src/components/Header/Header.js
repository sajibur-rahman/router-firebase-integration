import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='nav'>
            <NavLink to='/'>home</NavLink>
            <NavLink to='/register'>Regester</NavLink>
            <span>{user?.displayName && user.displayName}</span>
            {
                user?.uid ? <button onClick={ () => signOut(auth)}>log out</button> :
                <NavLink to='/login'>login</NavLink>}
        </div>
    );
};

export default Header;