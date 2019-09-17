import React from 'react';
import Character from './Character';


const Characters = ({ charactersList }) => {
    // debugger
    return (
        charactersList.map(icon => 
            <Character name={icon.name}/>
        )
    )
}

export default Characters;