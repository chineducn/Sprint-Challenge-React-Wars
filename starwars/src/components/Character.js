import React from 'react';
import cutesy from 'styled-components';

const CoolDiv = cutesy.div`
    color: blue;
    font-weight: bold;
    font-style: italic;
    border: 2px solid black;
    margin: 3px;
    width: 25%;
`;

const Character = ({ name }) => {
    return <CoolDiv>{name}</CoolDiv>
};


export default Character;