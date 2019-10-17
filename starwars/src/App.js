import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [peopleState, setPeople] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get("https://swapi.co/api/people")
      .then(swapiYes => {
        // debugger
        const { results } = swapiYes['data'];
        // debugger
        // console.log(results);
        
        setPeople(results);
        // debugger
        // setName(swapiYes['data'][])
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Characters charactersList={peopleState}/>
    </div>
  );
}

export default App;
