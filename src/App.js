import React from 'react';
import { useState } from 'react';
import AppBar from './Components/AppBar/AppBar';
import Filters from './Components/Filters/Filters';
import HomeSkeleton from './Components/HomeSkeleton/HomeSkeleton';


function App() {


  //ApBar states and methods
  const [searchString, setSearchString] = React.useState('');
  const searchStringChageHandler = (event) =>{
    setSearchString(event.target.value);
  } 
  
  const clearSearchString = () => {
    setSearchString('');
  }


  const moviesFilterHandler= ()=>{
    console.log('movie filter applied');

    if(moviesClass=='unselected'){  
      setMoviesClass('selected');
      //set movies filter
    }
    else{
      setMoviesClass('unselected');
      //remove movies filter
    }
  }





  const tvshowsFilterHandler= ()=>{
    console.log('tv show filter applied');
    
    if(tvshowsClass=='unselected'){  
      setTvshowsClass('selected');
      //set tvshows filter
    }
    else{
      setTvshowsClass('unselected');
      //remove tvshows filter
    }
  }



  const [moviesClass, setMoviesClass] = useState('unselected');
  const [tvshowsClass,setTvshowsClass] = useState('selected');

  const classnames = {movies:moviesClass, tvshows:tvshowsClass}


  const filters = {applyMovieFilter:moviesFilterHandler, applyTVShowFilter:tvshowsFilterHandler};



  return (
    <div>
      <AppBar
      searchString = {searchString} 
      onChangeHandler = {searchStringChageHandler} 
      clearSearchString= {clearSearchString} 
      filters={filters}
      ></AppBar>
      <Filters filters={filters} classnames={classnames}></Filters>
      <HomeSkeleton></HomeSkeleton>
    </div>
  );
}

export default App;
