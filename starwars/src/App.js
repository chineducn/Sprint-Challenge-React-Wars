import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Characters from './components/Characters';
import cutesy from 'styled-components';

const CenterDiv = cutesy.div`
 max-width: 1000px;
 margin: 0 auto;
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [resultState, setResult] = useState([]);
  const [currentApiState, setCurrentApi] = useState('https://swapi.co/api/people');
  const [nextApiState, setNextApi] = useState('');
  const [previousApiState]


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const nextPage = evt => {
    evt.preventDefault();
    setCurrentApi(nextApiState);
  }


  useEffect(() => {
    axios.get(currentApiState)
      .then(swapiYes => {
        // debugger
        const { results, next } = swapiYes['data'];
        // debugger
        // console.log(next);
        setResult(results);
        setNextApi(next);
      })


  }, [currentApiState])

  return (
    <CenterDiv className="App">
      <h1 className="Header">React Wars</h1>
      <Characters charactersList={resultState} />
      <button onClick={nextPage}>Next</button>
    </CenterDiv>
  );

}


export default App;
