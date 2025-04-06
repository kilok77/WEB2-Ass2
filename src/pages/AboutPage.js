import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p className="mb-4 text-center max-w-2xl">
        Welcome to our Pokémon haven! Here, you'll find a celebration of the
        world of Pokémon, where passion meets adventure. Our site is dedicated
        to sharing fun facts, game strategies, and a deep appreciation for these
        extraordinary creatures. Whether you're a seasoned trainer or just
        starting out, join us on this journey through the fascinating lore and
        vibrant world of Pokémon!
      </p>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
        alt="Pikachu"
        className="w-64 h-64 object-contain rounded shadow-lg"
      />
    </div>
  );
};

export default AboutPage;
