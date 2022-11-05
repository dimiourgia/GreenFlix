import React from "react";
import {useRef } from "react";
import './Signin.css';
import {auth} from '../../firebase';
import { signInWithEmailAndPassword } from "firebase/auth"; 

const Signin = ({setDisplaySigninOverlay})=>{

    const emailRef = useRef();
    const passwordRef = useRef();


    const signInUser = async ()=>{
        try{
            const userCredentials =  await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            console.log(userCredentials);
        }
        catch(error){
            console.log(error.message);
        }
    }

    return(
    <div className="signinOverlay" onClick={()=>{console.log('clicked overlay');setDisplaySigninOverlay(false); document.body.style.overflow='visible'}}>
        <div className="signinWrapper" onClick={(event)=>{event.stopPropagation();}} >
            <div className="signinFormWrapper">
                <input type='text' placeholder="Email" ref={emailRef}></input>
                <input type='password' placeholder="Password" ref={passwordRef}></input>     
                <button class="signInSubmitButton" onClick={signInUser}> Sign In</button>               
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
