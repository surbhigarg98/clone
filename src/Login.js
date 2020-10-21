import React from 'react'
import { Button } from '@material-ui/core';
import './Login.css'
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{},dispatch] = useStateValue();
    const signIn=()=>{
       auth.signInWithPopup(provider)
       .then((result)=>{
           dispatch({
               type:actionTypes.SET_USER,
               user:result.user
           });
       })
       .catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
         <div className="login_container">
             <img src="https://seeklogo.com/images/N/netflix-logo-6A5D357DF8-seeklogo.com.png" alt="logo"/>
             <div className="login_text">
                 <h1>Sign in to Netflix</h1>
                 <Button onClick={signIn} >Sign in with Google</Button>
             </div>
         </div>
        </div>
    )
}

export default Login
