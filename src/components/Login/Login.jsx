import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  const githubProvider = new GithubAuthProvider();

  const handleGoogleSingIn = () => {
    console.log("google sing in clicked");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sing-out completed");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSingIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // console.log(result);
        // setUser(result.user);

                const loggedInUser = result.user;
                console.log(loggedInUser)

                if(!loggedInUser.email && loggedInUser?.providerData?.length ){
                    console.log('user email is not directly provided')
                    if(loggedInUser.providerData[0].email){
                        loggedInUser.email = loggedInUser.providerData[0].email
                        setUser(loggedInUser);
                    }
                }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Please login now</h2>
      {user ? (
        <button onClick={handleSingOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSingIn}>Sign in with Google</button>
          <button onClick={handleGithubSingIn}>Sing in with Github</button>
        </>
      )}

      {user && (
        <div>
          <h2>User Name:{user.displayName}</h2>
          <p> User Email:{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
