import React from "react";

const PokemonDetails = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold text-center">{pokemon.name}</h2>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-40 mx-auto my-4"
        />
        <p className="text-center text-gray-700">Type: {pokemon.type}</p>
        <p className="text-center text-gray-700">ID: {pokemon.id}</p>
      </div>
    </div>
  );
};

export default PokemonDetails;
