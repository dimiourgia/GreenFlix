import React from "react";
import { useState } from "react";
import './Signup.css';

const Signup = ({setDisplaySignupOverlay})=>{

    return(
    <div className="signupOverlay" onClick={()=>{console.log('clicked overlay');setDisplaySignupOverlay(false); document.body.style.overflow='visible'}}>
        <div className="signupWrapper" onClick={(event)=>{event.stopPropagation();}} >
            <div className="signupFormWrapper">
                <input type='text' placeholder="Name"></input>
                <input type='text' placeholder="Email"></input>
                <input type='password' placeholder="Password"></input>
                <input type='password' placeholder="Confirm Password"></input>        
            </div>
            <span>OR</span>

            <div className="signUpWithGoogle">
                <image alt='googleLogo'></image>
                SignUp with Google
            </div>       
        </div>
    </div>
    );
}


export default Signup;

