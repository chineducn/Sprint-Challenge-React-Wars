import React from 'react';
import cutesy from 'styled-components';

const CoolDiv = cutesy.div`
    color: blue;
    font-weight: bold;
    font-style: italic;
    border: 2px solid black;
    margin: 3px;
    width: 20%;
`;

const Character = ({ name, gender }) => {
    return <CoolDiv>
        <p>Name: {name}</p>
        <p>Gender: {gender}</p>

    </CoolDiv>
};


export default Character;