import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider} from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";


function Login() {
    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user, 
            });
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login-container">
                <img src="https://assets.codepen.io/569858/internal/avatars/users/default.png?format=auto&height=256&version=2&width=256" alt=""/>
                <div className="login-text">
                    <h1>Sign in to Slack Web Chat</h1>

               </div>
               <Button type="submit" onClick={signIn}>Sign in with google</Button>
               <p className="login-text-desc">Design and Develop by <span>👨‍💻</span> Adarsh Tripathi </p>

            </div>
            
        </div>
    )
}

export default Login;
