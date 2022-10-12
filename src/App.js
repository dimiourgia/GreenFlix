import React from 'react';
import { useState } from 'react';
import AppBar from './Components/AppBar/AppBar';
import Filters from './Components/Filters/Filters';
import HomeSkeleton from './Components/HomeSkeleton/HomeSkeleton';
import Home from './Components/Home/Home';
import JSON_data from './databae.json';


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

  //simulate fetching api with a delay of 4,6 seconds
  const delay = Math.floor(Math.random() * 6000) + 4000;
  const [loaded, setLoaded] = useState(false);
  const [movieList, setMovieList] = useState('');

  const apiCall = ()=>{
    setMovieList(JSON_data.movies);
    setLoaded(true);
  }

  setTimeout(apiCall,delay);

  return (
    <div>
      <AppBar
      searchString = {searchString} 
      onChangeHandler = {searchStringChageHandler} 
      clearSearchString= {clearSearchString} 
      filters={filters}
      ></AppBar>
      <Filters filters={filters} classnames={classnames}></Filters>
      {!loaded && <HomeSkeleton/>}
      {loaded && <Home items={movieList}></Home>}      
    </div>
  );
}

export default App;
