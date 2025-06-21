import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const provider= new GoogleAuthProvider
    const handleGoogleSingIn =()=>{
        console.log("google sing in clicked");

        signInWithPopup(auth,provider)
        .then(result =>{
            console.log(result);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <h2>Please login now</h2>
            <button onClick={handleGoogleSingIn}>Sing in with Google</button>
        </div>
    );
};

export default Login;