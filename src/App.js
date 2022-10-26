import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import AppBar from './Components/AppBar/AppBar';
import Filters from './Components/Filters/Filters';
import HomeSkeleton from './Components/HomeSkeleton/HomeSkeleton';
import Home from './Components/Home/Home';
import Signup from './Components/Signup/Signup';
import JSON_data from './databae.json';


function App() {


  //ApBar states and methods
 
  const [displaySignUpOverlay, setDisplaySignupOverlay] = useState(false);
  const [movieList, setMovieList] = useState(JSON_data.movies); //movies displayed on page
  const [activeFilters, setActiveFilters] = useState([]);

  //searcbox states, variable and methods
  
  const [searchString, setSearchString] = React.useState('');
  const searchStringChageHandler = (event) =>{
    setSearchString(event.target.value);
    if(event.target.value!=''){
      var searchedFor = JSON_data.movies.filter(movie => movie.title.toLowerCase().includes(event.target.value.toLowerCase()));
      console.log(searchedFor);

      setMovieList(searchedFor);
    }
    else{
      setMovieList(JSON_data.movies);
    }
    
  } 
  
  const clearSearchString = () => {
    setSearchString('');
    setMovieList(JSON_data.movies);
  }
  //---------------------------------------------------------------



  //classnames for filters and their states

  const [actionClass, setActionClass] = useState('unselected');
  const [adventureClass, setAdventureClass] = useState('unselected');
  const [comedyClass, setComedyClass] = useState('unselected');
  const [thrillerClass, setThrillerClass] = useState('unselected');
  const [familyClass, setFamilyClass] = useState('unselected');

  const classnames = {
    action:actionClass,
    adventure:adventureClass,
    comedy:comedyClass,
    thriller:thrillerClass,
    family:familyClass
  }


  //HOF for handling all filter clicking events -> returns a handler for that event 

  const filterHandler = function(filter){
    const debug = true;

    switch(filter){

      case "action": 
      return () => {
          if(debug) console.log('action filter clicked'); 
          if(actionClass=='unselected'){  
            setActionClass('selected');
            setActiveFilters([...activeFilters,'action']);
            if(debug) console.log(activeFilters);
          }
          else{
            setActionClass('unselected');
            const updatedActiveFilters = activeFilters.slice();
            const index = updatedActiveFilters.indexOf('action');
            updatedActiveFilters.splice(index,1);
            setActiveFilters(updatedActiveFilters);
            if(debug) console.log(updatedActiveFilters);
          }
      }

      case "adventure": 
      return () => {
          if(debug) console.log('adventure filter clicked'); 
          if(adventureClass=='unselected'){  
            setAdventureClass('selected');
            setActiveFilters([...activeFilters,'adventure']);
            if(debug) console.log(activeFilters);
          }
          else{
            setAdventureClass('unselected');
            const updatedActiveFilters = activeFilters.slice();
            const index = updatedActiveFilters.indexOf('adventure');
            updatedActiveFilters.splice(index,1);
            setActiveFilters(updatedActiveFilters);
            if(debug) console.log(activeFilters);
          }
      }

      case "comedy": 
      return () => {
          if(debug) console.log('comedy filter clicked'); 
          if(comedyClass=='unselected'){  
            setComedyClass('selected');
            setActiveFilters([...activeFilters,'comedy']);
            if(debug) console.log(activeFilters);
          }
          else{
            setComedyClass('unselected');
            const updatedActiveFilters = activeFilters.slice();
            const index = updatedActiveFilters.indexOf('comedy');
            updatedActiveFilters.splice(index,1);
            setActiveFilters(updatedActiveFilters);
            if(debug) console.log(activeFilters);
          }
      }

      case "thriller": 
      return () => {
          if(debug) console.log('thriller filter clicked'); 
          if(thrillerClass=='unselected'){  
            setThrillerClass('selected');
            setActiveFilters([...activeFilters,'thriller']);
            if(debug) console.log(activeFilters);
          }
          else{
            setThrillerClass('unselected');
            const updatedActiveFilters = activeFilters.slice();
            const index = updatedActiveFilters.indexOf('thriller');
            updatedActiveFilters.splice(index,1);
            setActiveFilters(updatedActiveFilters);
            if(debug) console.log(activeFilters);
          }
      }

      case "family": 
      return () => {
          if(debug) console.log('family filter clicked'); 
          if(familyClass=='unselected'){  
            setFamilyClass('selected');
            setActiveFilters([...activeFilters,'family']);
            if(debug) console.log(activeFilters);
          }
          else{
            setFamilyClass('unselected');
            const updatedActiveFilters = activeFilters.slice();
            const index = updatedActiveFilters.indexOf('family');
            updatedActiveFilters.splice(index,1);
            setActiveFilters(updatedActiveFilters);
            if(debug) console.log(activeFilters);
          }
      }




      default: return;
    }
  }



  //simulate fetching api with a delay of 3,4 seconds
  const delay = Math.floor(Math.random() * 1000);
  const [loaded, setLoaded] = useState(false);

  const apiCall = ()=>{
    setLoaded(true);
  }

  setTimeout(apiCall,delay);

  //update state whenever a filter is applied or removed

    //function that rturns a new array of movies after applying a bunch of filters
    function filterdArray (filters, movies){
      var result=[];
        
        filters.forEach(filter =>{
          result.forEach(m =>{movies = movies.filter(movie=>movie.id!=m.id)});
          result = [...result,...movies.filter(movie => movie.tags.find(tag=> tag==filter))];
        });
        return result;
    }

  //update filterdMovies state on applying or removing filters

  useEffect(()=>{
    if(activeFilters.length===0) {
      console.log("from useeffect & no filters");
      setMovieList(JSON_data.movies);
    }
    else{
      const filterdMovies = filterdArray(activeFilters,JSON_data.movies);
      setMovieList(filterdMovies);
      console.log("from useeffect & filters active: filterdMovies" + filterdMovies.length +"  activeFilters:"+ activeFilters, activeFilters.length);
    }

    console.log("from useEffect:");
    
  },[activeFilters])


  useEffect(()=>{
    if(movieList.length==0){
      setMessageClass("displayMessage");
    }

    else if(messageClass=='displayMessage'){
      setMessageClass('hide');
    }
    
  },[movieList.length])

// Error message 
  const [messageClass, setMessageClass] = useState("hide");
  const message = "Oops.. seems like we don't have the movie you are looking for !";
  return (
    <div>
      <div className={messageClass}>{message}</div>
      <AppBar
      searchString = {searchString} 
      onChangeHandler = {searchStringChageHandler} 
      clearSearchString= {clearSearchString} 
      displaySignUpOverlay = {displaySignUpOverlay}
      setDisplaySignupOverlay = {setDisplaySignupOverlay}
      ></AppBar>
      <Filters filterHandler={filterHandler} classnames={classnames}></Filters>
      {!loaded && <HomeSkeleton/>}
      {loaded && <Home items={movieList}></Home>}
      {displaySignUpOverlay && <Signup setDisplaySignupOverlay={setDisplaySignupOverlay} />}      
    </div>
  );
}

export default App;
