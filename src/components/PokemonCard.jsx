import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Card = styled.div``;

const Button = styled.button``;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  const navigate = useNavigate();
  return (
    <Card onClick={() => navigate(`/pokemon/${pokemon.id}`)}>
      <img src={pokemon.img_url} alt={""} />
      <p>{pokemon.korean_name}</p>
      {isSelected ? (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(pokemon);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAdd(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
