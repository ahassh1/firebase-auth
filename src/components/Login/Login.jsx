import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider()
    
    const handleGoogleSingIn = () => {
        console.log("google sing in clicked");

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user);
                setUser(result.user)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSingOut = () => {
        signOut(auth)
            .then(() => {
                console.log('sing-out completed');
                setUser(null);
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <h2>Please login now</h2>
            {user ? 
                <button onClick={handleSingOut}>Sign Out</button> :
                <button onClick={handleGoogleSingIn}>Sign in with Google</button>
            }

          {
            user && <div>
            <h2>{user.displayName}</h2>
            <p>{user.email}</p>
            <img src={user.photoURL} alt="" />
          </div>
          }
        </div>
    );
};

export default Login;