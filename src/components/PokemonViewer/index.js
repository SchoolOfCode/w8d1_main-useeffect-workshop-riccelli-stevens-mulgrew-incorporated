import { useState, useEffect} from "react";

function PokemonViewer({ id }) {
  // TODO: send http request to `https://pokeapi.co/api/v2/pokemon/${id}` and display the data!
  // HINT: you will need useState and useEffect!

  const [pokemonData, setPokemonData] = useState([])
  let data;

  useEffect(() => {
    return async() => {
      console.log(id)
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      data = res.json()
      setPokemonData(data)
      

    }
  }, [document.querySelector("p")])


  return (
    <div className="pokemon-viewer">
      <p>display pokemon with id {id} here!</p>
    </div>
  );
}

export default PokemonViewer;
