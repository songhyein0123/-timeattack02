import React, { createContext, useContext, useState } from "react";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../mock";
import PokemonList from "../components/PokemonList";

export const PokemonContext = createContext();

function Dex() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.some((p) => p.id === Number(pokemon.id))) {
      alert("이미 선택된 포켓몬 입니다.");
    } else if (selectedPokemon.length >= 6) {
      alert("최대 6개의 포켓못만 선택할 수 있습니다.");
    } else {
      setSelectedPokemon([...selectedPokemon, pokemon]);
    }
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon(
      selectedPokemon.filter((p) => p.id !== Number(pokemon.id))
    );
  };

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        removePokemon,
        MOCK_DATA,
        addPokemon,
        selectedPokemon,
      }}
    >
      <div>
        <Dashboard />
        <PokemonList />
      </div>
    </PokemonContext.Provider>
  );
}

export default Dex;
