import React from 'react';
import { useState } from 'react';
import './AppBar.css';
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion';
import leftLogo from '../../images/GFLogo.png';
import searchLogo from '../../images/searchLogo.svg';
import closeLogo from '../../images/close.svg';


const AppBar = ({searchString, onChangeHandler, clearSearchString, filters})=>{

    const [filterSpanClassName, setFilterSpanClassName] = useState('hidden');

    const filterMouseEnterHandler = ()=>{ 
        console.log('mouseEntered');
        setFilterSpanClassName('visible')
    }
    const filterMouseLeaveHandler = ()=>{
        console.log('mouseLeft');
        setFilterSpanClassName('hidden');
    }

    return(
        <motion.div animate={{opacity:1}} initial={{opacity:0}} id='AppBar'>
            <div className='firstWrapper'>
                <img id="leftLogo" src={leftLogo} alt='logo'></img>
            </div>
            
            
            <div className='midWrapper'>
                <SearchBox searchString={searchString} onChangeHandler={onChangeHandler} clearSearchString={clearSearchString}></SearchBox>
            </div>
            
            <div className='lastWrapper'>
                <div className={'filterWrapper'}>
                    <button 
                    onMouseEnter={filterMouseEnterHandler}
                    className='filterButton'>
                        <img src={searchLogo}/>
                        Filter
                    </button>
                </div>
                <span 
                className={filterSpanClassName}
                onMouseLeave={filterMouseLeaveHandler}>
                    <p>Type:</p>
                    <button onClick={filters.applyMovieFilter}>Movies</button>
                    <button onClick={filters.applyTVShowFilter}>TV Shows</button>
                    <p>Gener:</p>
                    <button >Action</button>
                    <button >Thriller</button>
                    <button>Comedy</button>
                </span>
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
        
        <input type='text' placeholder='Search Item' className='inputSearch' onChange={onChangeHandler} value={searchString}/>
        
        <div className='searchLogoWrapper' >
            <button className='closeButton'>
                <img id='closeLogo' src={closeLogo} alt='Close Logo' />
            </button>
        </div>
        
    </div>
    </>
)
}

export default AppBar;