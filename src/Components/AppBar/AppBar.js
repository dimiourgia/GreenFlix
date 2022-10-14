import React from 'react';
import { useState } from 'react';
import './AppBar.css';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion';
import leftLogo from '../../images/GFLogo.png';
import searchLogo from '../../images/searchLogo.svg';
import closeLogo from '../../images/close.svg';


const AppBar = ({searchString, onChangeHandler, clearSearchString})=>{

    return(
        <motion.div animate={{opacity:1}} initial={{opacity:0}} id='AppBar'>
            <div className='firstWrapper'>
                <img id="leftLogo" src={leftLogo} alt='logo'></img>
            </div>
            
            
            <div className='midWrapper'>
                <SearchBox searchString={searchString} onChangeHandler={onChangeHandler} clearSearchString={clearSearchString}></SearchBox>
            </div>
            <div className='lastWrapper'>
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

export default AppBar;