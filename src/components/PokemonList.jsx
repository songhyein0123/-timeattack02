import React from "react";
import { useContext } from "react";
import { styled } from "styled-components";
import { PokemonContext } from "../pages/Dex";

const ListContainer = styled.div``;

const PokemonList = () => {
  const { pokemonList, addPokemon, selectedPokemon } =
    useContext(PokemonContext);
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={addPokemon}
          isSelected={selectedPokemon.some((p) => p.id === Number(pokemon.id))}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
