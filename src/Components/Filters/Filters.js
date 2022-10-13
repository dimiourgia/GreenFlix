import React from 'react';
import './Filters.css';


const Filters = ({filterHandler,classnames})=>{
    return(
        <div className='filtersWrapper'>
            <button onClick={filterHandler('action')} className={classnames.action}>Action</button>
            <button onClick={filterHandler('adventure')} className={classnames.adventure}>Adventure</button>
            <button onClick={filterHandler('thriller')} className={classnames.thriller}>Thriller</button>
            <button onClick={filterHandler('comedy')} className={classnames.comedy}>Comedy</button>
            <button onClick={filterHandler('family')} className={classnames.family}>Family</button>
        </div>
    );
}


export default Filters;



