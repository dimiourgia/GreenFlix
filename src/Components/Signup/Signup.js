import React from "react";
import { useRef } from "react";
import './Signup.css';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Signup = ({setDisplaySignupOverlay})=>{


    const nameRef=useRef();
    const emailRef=useRef();
    const passwordRef=useRef();
    const confirmPasswordRef=useRef();
    const signupButtonRef=useRef();


    const createUser = async ()=>{
        try{
            const userCredentials = await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
            console.log(userCredentials);
        }
        catch(error){
            console.log(error);
        }

    }



    return(
    <div className="signupOverlay" onClick={()=>{console.log('clicked overlay');setDisplaySignupOverlay(false); document.body.style.overflow='visible'}}>
        <div className="signupWrapper" onClick={(event)=>{event.stopPropagation();}} >
            <div className="signupFormWrapper">
                <input type='text' placeholder="Name" ref={nameRef}></input>
                <input type='text' placeholder="Email" ref={emailRef}></input>
                <input type='password' placeholder="Password" ref={passwordRef}></input>
                <input type='password' placeholder="Confirm Password" ref={confirmPasswordRef}></input> 
                <button className="signupButton" onClick={createUser}>Sign UP</button>       
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

