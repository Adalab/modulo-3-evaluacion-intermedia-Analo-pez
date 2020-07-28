import React from 'react';
import Pokemon from './Pokemon';

const PokeList = props => {
    const items = props.pokemons.map((pokemon, index) => {
        return (
            <li key={index} className="App-card">
                <Pokemon name={pokemon.url} name={pokemon.name} types={pokemon.types} evolution={pokemon.evolution} />
            </li>);
    });

    return <ul>{items}</ul>;
};


export default PokeList;
