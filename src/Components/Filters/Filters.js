import React, { useEffect, useState } from 'react';

import './Filters.css';


const Filters = ({filters, setActiveFilters})=>{

    const [actionClass, setActionClass] = useState('unselected');
    const [adventureClass, setAdventureClass] = useState('unselected');
    const [comedyClass, setComedyClass] = useState('unselected');
    const [thrillerClass, setThrillerClass] = useState('unselected');
    const [familyClass, setFamilyClass] = useState('unselected');
  
    useEffect(()=>{

            if(filters.find(f=>(f==='action'))) setActionClass('selected');
            else if(actionClass==='selected') setActionClass('unselected');

            if(filters.find(f=>(f==='adventure'))) setAdventureClass('selected');
            else if(adventureClass==='selected') setAdventureClass('unselected');

            if(filters.find(f=>(f==='thriller'))) setThrillerClass('selected');
            else if(thrillerClass==='selected') setThrillerClass('unselected');

            if(filters.find(f=>(f==='comedy'))) setComedyClass('selected');
            else if(comedyClass==='selected') setComedyClass('unselected');

            if(filters.find(f=>(f==='family'))) setFamilyClass('selected');
            else if (familyClass==='selected') setFamilyClass('unselected');

    },[filters])



    const filterHandler = function(filter){
        return ()=>{
            console.log(filters.indexOf(filter));

          if(filters.indexOf(filter)!=-1){
            console.log(true);
            const updatedActiveFilters = filters.slice();
            const index = updatedActiveFilters.indexOf(filter);
            updatedActiveFilters.splice(index,1);
            setActiveFilters(updatedActiveFilters);
          }
          else{
            console.log(false);
            console.log('setting '+ filter)
            setActiveFilters([...filters, filter]);
          }  
        }
      }
    

    return(
        <div className='filtersWrapper'>
            <button onClick={filterHandler('action')} className={actionClass}>Action</button>
            <button onClick={filterHandler('adventure')} className={adventureClass}>Adventure</button>
            <button onClick={filterHandler('thriller')} className={thrillerClass}>Thriller</button>
            <button onClick={filterHandler('comedy')} className={comedyClass}>Comedy</button>
            <button onClick={filterHandler('family')} className={familyClass}>Family</button>
        </div>
    );
}


export default Filters;



