import React from 'react';
import Character from './Character';
import cutesy from 'styled-components';

const FlexDiv = cutesy.div`
    display: flex;
    flex-wrap: wrap;
`;

const Characters = ({ charactersList }) => {
    // debugger
    return (
        <FlexDiv>
            {charactersList.map(icon =>
                <Character name={icon.name} />
            )}
        </FlexDiv>
    )
}

export default Characters;