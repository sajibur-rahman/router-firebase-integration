import React from 'react';

const Regester = () => {
    return (
        <div style={{display:'flex', justifyContent:'center' , alignItems:'center'}}>
            <div>
            <h2>please regester</h2>
            <form>
                <input type="text" name="name" id="name" placeholder='enter your name' />
                <br /><br />
                <input type="email" name="email" id="email" placeholder='please enter your email' />
                <br />
                <br />
                <input type="password" name="password" id="password" placeholder='please enter your password' />
                <br />
                <br />
                <input type="submit" value="regester" />
                <br /><br />
                <button>google sign in</button>
            </form>
            </div>
        </div>
    );
};

export default Regester;