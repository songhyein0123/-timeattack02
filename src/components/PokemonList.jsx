import React from "react";
import { styled } from "styled-components";
import PokemonCard from "./PokemonCard";

const ListContainer = styled.div``;

const PokemonList = ({ pokemonList, onAddPokemon, selectedPokemon }) => {
  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={onAddPokemon}
          isSelected={selectedPokemon.some((p) => p.id === Number(pokemon.id))}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
