import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { filterPokemonsByType } from "../api";

export const getPokemonsByType = async (type) => {
  
  try {
    const pokemons = [];
    const data = await filterPokemonsByType(type);

    for(let pkm of data.pokemon){
      pokemons.push(pkm.pokemon.name);
    }

    console.log(pokemons);
    return pokemons;
    
  } catch (error) {
    console.log("fetchPokemons error: ", error);
  }
  
};

const Filter = ({ options, onChange }) => {
  const [filteredPokemons, setFilteredPokemons] = useState();
  
  useEffect(() => {
    getPokemonsByType('fire');
  }, []);

  return(
    <div data-testid="my-select-component">
      <Select
        className="basic-single"
        classNamePrefix="select"
        name="myOptions"
        placeholder="Select a pokémon type"
        options={options}
        onChange={e => onChange(e)}
      />
    </div>
  );
};
  
export default Filter;

  