import React from "react";

const PokemonCard = ({ id, name, image, type }) => {
  // Define background colors for types
  const typeColors = {
    grass: "bg-green-300",
    fire: "bg-orange-400",
    water: "bg-blue-400",
    bug: "bg-green-400",
    normal: "bg-gray-300",
    poison: "bg-purple-400",
  };

  return (
    <div
      className={`p-4 rounded-lg ${
        typeColors[type] || "bg-gray-400"
      } shadow-md w-48`}
    >
      <h2 className="text-white font-bold text-lg">#{id}</h2>
      <img src={image} alt={name} className="w-16 h-16 mx-auto" />
      <h3 className="text-white font-bold text-xl text-center">{name}</h3>
    </div>
  );
};

export default PokemonCard;
