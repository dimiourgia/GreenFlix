import React from 'react';
import AppBar from './Components/AppBar/AppBar';
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



  return (
    <div>
      <AppBar
      searchString = {searchString} 
      onChangeHandler = {searchStringChageHandler} 
      clearSearchString= {clearSearchString} 
      ></AppBar>
      <HomeSkeleton></HomeSkeleton>
    </div>
  );
}

export default App;
