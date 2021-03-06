import { useState, useEffect } from "react";

function PokemonViewer({ id }) {
  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setPokemonData(data);
    }
    getData();
  }, [id, pokemonData]);

  // useEffect(() => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  //   .then(response => response.json())
  //   .then(data => {
  //     setPokemonData(data)
  //     console.log(pokemonData)
  //   })
  // },[id])

  return (
    <div className="pokemon-viewer">
      <p>display pokemon with id {id} here!</p>
      <p>Name: {pokemonData.name}</p>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt={pokemonData.name}
      ></img>
    </div>
  );
}
//{"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"}
export default PokemonViewer;
