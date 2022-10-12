import React, { useEffect } from 'react';
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



  const [activeFilters, setActiveFilters] = useState(["adventure"]);


  const moviesFilterHandler= ()=>{
    console.log('movie filter applied');

    if(moviesClass==='unselected'){  
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
    
    if(tvshowsClass==='unselected'){  
      setTvshowsClass('selected');
      //set tvshows filter
    }
    else{
      setTvshowsClass('unselected');
      //remove tvshows filter
    }
  }


  const actionFilterHandler= ()=>{
    console.log('action filter clicked');
    
    if(actionClass==='unselected'){  
      setActionClass('selected');
      setActiveFilters([...activeFilters,'action']);
      console.log(activeFilters);

      //set tvshows filter
    }
    else{
      setActionClass('unselected');
      setActiveFilters(activeFilters.splice(activeFilters.indexOf('action'),1));
      console.log(activeFilters);
      //remove tvshows filter
    }
  }


  const [moviesClass, setMoviesClass] = useState('unselected');
  const [tvshowsClass,setTvshowsClass] = useState('selected');
  const [actionClass, setActionClass] = useState('unselected');

  const classnames = {movies:moviesClass, tvshows:tvshowsClass, action:actionClass}


  const filters = {
    applyMovieFilter:moviesFilterHandler, 
    applyTVShowFilter:tvshowsFilterHandler,
    applyActionFilter:actionFilterHandler
  };

  //simulate fetching api with a delay of 4,6 seconds
  const delay = Math.floor(Math.random() * 2000) + 1000;
  const [loaded, setLoaded] = useState(false);
  const [movieList, setMovieList] = useState('');

  const apiCall = ()=>{
    setMovieList(JSON_data.movies);
    setLoaded(true);
  }

  setTimeout(apiCall,delay);

  //update state whenever a filter is applied or removed

  useEffect(()=>{
    if(activeFilters.length===0) setMovieList(JSON_data.movies);
    else{
      const filterdMovies = JSON_data.movies.filter(movie => {activeFilters.forEach(filter => {
        movie.tags.forEach(tag =>{
          return tag==filter;
        })
      })})
      setMovieList(filterdMovies);
    }
  },[activeFilters])


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
