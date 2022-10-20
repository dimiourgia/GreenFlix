import React from "react";

const Signup = ()=>{
    return(
    <div className="signupWrapper">
        <div className="signupFormWrapper">
            <input type='text' placeholder="Name"></input>
            <input type='text' placeholder="Name"></input>
            <input type='password' placeholder="Password"></input>
            <input type='password' placeholder="Confirm Password"></input>        
        </div>
        <span>OR</span>

        <div className="signUpWithGoogle">
            <image alt='googleLogo'></image>
            SignUp with Google
        </div>       
    </div>
    );
}

