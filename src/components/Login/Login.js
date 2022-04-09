import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle] =  useSignInWithGoogle(auth);
    return (
        <div style={{display:'flex', justifyContent:'center' , alignItems:'center'}}>
            <div>
            <h2>please Login</h2>
            <form>
                <input type="email" name="email" id="email" placeholder='please enter your email' />
                <br />
                <br />
                <input type="password" name="password" id="password" placeholder='please enter your password' />
                <br />
                <br />
                <input type="submit" value="login" />
                <br /><br />
            </form>
            <button onClick={ () => signInWithGoogle()}>google sign in</button>
            </div>
        </div>
    );
};

export default Login;