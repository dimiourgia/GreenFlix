import React from "react";
import { useState } from "react";
import './Signin.css';

const Signin = ({setDisplaySigninOverlay})=>{


    return(
    <div className="signinOverlay" onClick={()=>{console.log('clicked overlay');setDisplaySigninOverlay(false); document.body.style.overflow='visible'}}>
        <div className="signinWrapper" onClick={(event)=>{event.stopPropagation();}} >
            <div className="signinFormWrapper">
                <input type='text' placeholder="Email"></input>
                <input type='password' placeholder="Password"></input>                    
            </div>
            <span>OR</span>
            <div className="signinWithGoogle">
                <image alt='googleLogo'></image>
                Login with Google
            </div>       
        </div>
    </div>
    );
}


export default Signin;
