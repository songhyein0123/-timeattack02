import React from "react";
import { useContext } from "react";
import { styled } from "styled-components";
import { PokemonContext } from "../pages/Dex";
import PokemonCard from "./PokemonCard";

const DashboardContainer = styled.div``;

const Dashboard = () => {
  const { selectedPokemon, removePokemon } = useContext(PokemonContext);
  return (
    <DashboardContainer>
      <h2>대시보드</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <ul>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onRemove={removePokemon}
              isSelected={selectedPokemon.some(
                (p) => p.id === Number(pokemon.id)
              )}
            />
          ))}
        </ul>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
