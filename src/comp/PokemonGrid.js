import React from "react";
import getTypeColor from "../utils/typeColors";

const PokemonGrid = ({ pokemonList, loading, onSelect }) => {
  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-3 gap-6">
      {pokemonList.map((pokemon) => (
        <div
          key={pokemon.id}
          className={`p-4 rounded-lg shadow-lg text-center cursor-pointer hover:scale-105 transition transform duration-300 ${getTypeColor(
            pokemon.type
          )}`}
          onClick={() => onSelect(pokemon)} // Click event to open modal
        >
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-24 mx-auto"
          />
          <h3 className="text-lg font-bold mt-2 text-white">{pokemon.name}</h3>
          <p className="text-sm text-gray-200 uppercase">{pokemon.type}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonGrid;
