import React from 'react';

const Login = () => {
    const handleGoogleSingIn =()=>{
        console.log("google sing in clicked");
    }
    return (
        <div>
            <h2>Please login now</h2>
            <button onClick={handleGoogleSingIn}>Sing in with Google</button>
        </div>
    );
};

export default Login;