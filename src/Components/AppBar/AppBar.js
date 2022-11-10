import React from 'react';
import { useState } from 'react';
import './AppBar.css';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion';
import leftLogo from '../../images/GFLogo.png';
import searchLogo from '../../images/searchLogo.svg';
import closeLogo from '../../images/close.svg';
import { auth } from '../../firebase';

const AppBar = ({
    searchString, 
    onChangeHandler, 
    clearSearchString, 
    setDisplaySignupOverlay,
    setDisplaySigninOverlay,
    loggedIn,
    setLoggedIn
})=>{



    return(
        <motion.div animate={{opacity:1}} initial={{opacity:0}} id='AppBar'>
            <div className='firstWrapper'>
                <img id="leftLogo" src={leftLogo} alt='logo'></img>
            </div>
            <div className='midWrapper'>
                <SearchBox searchString={searchString} onChangeHandler={onChangeHandler} clearSearchString={clearSearchString}></SearchBox>
            </div>
            <div className='lastWrapper'>
                { !loggedIn &&  <SgninButton setDisplaySigninOverlay = {setDisplaySigninOverlay} /> }
                { !loggedIn &&  <SgnupButton setDisplaySignupOverlay={setDisplaySignupOverlay} /> }
                {loggedIn && <SgnoutButton setLoggedIn={setLoggedIn} />}
                
            </div>

        </motion.div>
    );
    
}

const SearchBox = ({searchString, onChangeHandler, clearSearchString}) =>{
    
return(
    <>
    <div id='searchArea' className="searchBoxWrapper">
        <div className='searchLogoWrapper'>
            <img id='searchLogo'  src={searchLogo} alt='Search Logo'/>
        </div>
        
        <input type='text' placeholder='Search movies' className='inputSearch' onChange={onChangeHandler} value={searchString}/>
        
        <div className='searchLogoWrapper' >
            <button className='closeButton' onClick={clearSearchString}>
                <img id='closeLogo' src={closeLogo} alt='Close Logo' />
            </button>
        </div>
        
    </div>
    </>
)
}

const SgnupButton = ({setDisplaySignupOverlay}) => (<button className='signUpButton' onClick={()=>{setDisplaySignupOverlay(true); document.body.style.overflow='hidden'}}>Sign Up</button>)
const SgninButton = ({ setDisplaySigninOverlay}) => (<button className='signInButton' onClick={()=>{setDisplaySigninOverlay(true); document.body.style.overflow='hidden'}}>Sign In</button>)
const SgnoutButton = ({setLoggedIn}) => (<button className='signOutButton' onClick={()=>{ auth.signOut(); setLoggedIn(false); }}>Sign Out</button>)

export default AppBar;