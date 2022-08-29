/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen } from '@testing-library/react';
 import Filter from './Filter';
 import { getPokemonsByType } from './Filter';
 
 describe('component testing', () => {
     const mockedOptions = [
         {label: 'mocked option 1', value: 'fire'},
         {label: 'mocked option 2', value: 'grass'},
         {label: 'mocked option 3', value: 'water'},
     ];
 
     it('should render with no errors', async() => {
         const mockedOnChange = jest.fn();
         render(<Filter options={mockedOptions} onChange={mockedOnChange}/>);
         const placeholder = screen.getByText('Select a pokémon type');
         expect(placeholder).toBeTruthy();
     });
 
 });
 
 describe('filter function', () => {
     
     const firePokemons = [
         "charmander",
         "charmeleon",
         "charizard",
         "vulpix",
         "ninetales",
         "growlithe",
         "arcanine",
         "ponyta",
         "rapidash",
         "magmar",
         "flareon",
         "moltres",
         "cyndaquil",
         "quilava",
         "typhlosion",
         "slugma",
         "magcargo",
         "houndour",
         "houndoom",
         "magby",
         "entei",
         "ho-oh",
         "torchic",
         "combusken",
         "blaziken",
         "numel",
         "camerupt",
         "torkoal",
         "chimchar",
         "monferno",
         "infernape",
         "magmortar",
         "heatran",
         "victini",
         "tepig",
         "pignite",
         "emboar",
         "pansear",
         "simisear",
         "darumaka",
         "darmanitan-standard",
         "litwick",
         "lampent",
         "chandelure",
         "heatmor",
         "larvesta",
         "volcarona",
         "reshiram",
         "fennekin",
         "braixen",
         "delphox",
         "fletchinder",
         "talonflame",
         "litleo",
         "pyroar",
         "volcanion",
         "litten",
         "torracat",
         "incineroar",
         "oricorio-baile",
         "salandit",
         "salazzle",
         "turtonator",
         "blacephalon",
         "scorbunny",
         "raboot",
         "cinderace",
         "carkol",
         "coalossal",
         "sizzlipede",
         "centiskorch",
         "rotom-heat",
         "castform-sunny",
         "darmanitan-zen",
         "charizard-mega-x",
         "charizard-mega-y",
         "houndoom-mega",
         "blaziken-mega",
         "groudon-primal",
         "camerupt-mega",
         "marowak-alola",
         "salazzle-totem",
         "marowak-totem",
         "darmanitan-galar-zen",
         "charizard-gmax",
         "cinderace-gmax",
         "coalossal-gmax",
         "centiskorch-gmax",
         "growlithe-hisui",
         "arcanine-hisui",
         "typhlosion-hisui"
     ];
 
     it('should return array containing', async() => {
         const pokemons = await getPokemonsByType('fire');
         expect(pokemons).toEqual((firePokemons));
     });
 });
 
 