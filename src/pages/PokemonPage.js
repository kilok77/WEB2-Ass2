import React, { useState, useEffect } from "react";
import PokemonGrid from "../comp/PokemonGrid";
import Pagination from "../comp/Pagination";
import PokemonDetails from "../comp/PokemonDetails";

const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null); // State for modal
  const limit = 12; // Number of Pokémon per page

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        );
        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const details = await res.json();
            return {
              id: details.id,
              name:
                details.name.charAt(0).toUpperCase() + details.name.slice(1),
              image: details.sprites.other["official-artwork"].front_default,
              type: details.types[0].type.name,
            };
          })
        );

        setPokemonList(pokemonDetails);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
      setLoading(false);
    };

    fetchPokemon();
  }, [offset]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6 p-6">
      <PokemonGrid
        pokemonList={pokemonList}
        loading={loading}
        onSelect={setSelectedPokemon}
      />
      <Pagination
        offset={offset}
        limit={limit}
        setOffset={setOffset}
        hasNext={pokemonList.length === limit}
      />

      {/* Show the modal when a Pokémon is selected */}
      {selectedPokemon && (
        <PokemonDetails
          pokemon={selectedPokemon}
          onClose={() => setSelectedPokemon(null)}
        />
      )}
    </div>
  );
};

export default PokemonPage;
