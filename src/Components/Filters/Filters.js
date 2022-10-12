import React from 'react';
import './Filters.css';


const Filters = ({filters,classnames})=>{
    return(
        <div className='filtersWrapper'>
            <button onClick={filters.applyMovieFilter} className={classnames.movies}>Movies</button>
            <button onClick={filters.applyTVShowFilter} className={classnames.tvshows}>TV Shows</button>
            <button onClick={filters.applyActionFilter} className={classnames.action}>Action</button>
            <button >Thriller</button>
            <button>Comedy</button>
        </div>
    );
}


export default Filters;



