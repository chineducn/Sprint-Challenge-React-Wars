import React from 'react';
import cutesy from 'styled-components';

const CoolDiv = cutesy.div`
    color: blue;
    font-weight: bold;
    font-style: italic;
`; 

const Character = ({ name }) => {
    return <CoolDiv>{name}</CoolDiv>
};


export default Character;