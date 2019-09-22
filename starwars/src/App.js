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
  const [firstResultState, setFirst] = useState([]);
  const [nextResultState, setNext] = useState([]);
  const [currentApiState, setCurrentApi] = useState('https://swapi.co/api/people');
  const [nextApiState, setNextApi] = useState('');
  // console.log(apiState);
  // console.log(currentApiState);
  // console.log(nextApiState);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // const starwarsPeopleApi = "https://swapi.co/api/people";
  const nextPage = evt => {
    evt.preventDefault();
    const newPage = [...nextResultState];
    setCurrentApi(nextApiState);
  }


  useEffect(() => {
    axios.get(currentApiState)
      .then(swapiYes => {
        // debugger
        const { results, next } = swapiYes['data'];
        // debugger
        // console.log(next);
        setFirst(results);
        setNextApi(next);
        axios.get(next)
          .then(nextYes => {
            // debugger
            const { results } = nextYes['data'];
            setNext(results);
          })



      })


  }, [currentApiState])

  return (
    <CenterDiv className="App">
      <h1 className="Header">React Wars</h1>
      <Characters charactersList={firstResultState} />
      <button onClick={nextPage}>Next</button>
    </CenterDiv>
  );

}


export default App;
