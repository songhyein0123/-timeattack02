import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import MOCK_DATA from "../mock";
import PokemonList from "../components/PokemonList";

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
    <div>
      <Dashboard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList
        pokemonList={MOCK_DATA}
        onAddPokemon={addPokemon}
        selectedPokemon={selectedPokemon}
      />
    </div>
  );
}

export default Dex;
