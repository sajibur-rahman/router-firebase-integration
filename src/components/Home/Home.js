import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Home = () => {
    const [user]= useAuthState(auth);
    return (
        <div>
            <h1>this is home {user?.displayName}</h1>
        </div>
    );
};

export default Home;