import React from 'react';

const Login = () => {
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
                <button>google sign in</button>
            </form>
            </div>
        </div>
    );
};

export default Login;