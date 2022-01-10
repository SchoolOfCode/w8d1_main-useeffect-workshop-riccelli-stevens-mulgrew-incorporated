import React, { useState } from "react";
import "./App.css";

import PokemonViewer from "../PokemonViewer";

function App() {
  const [id, setId] = useState();

  function handleClick() {
    // TODO: Set id to be random number between 1 and 151 - DONE
    console.log("Handclick is being executed")
    const randInt = Math.floor(Math.random() * 151) + 1;

    // return Math.floor(Math.random()*(max-min+1)+min);

    setId(randInt);
  }

  return (
    <div className="App">
      {/* TODO: call handleClick when button clicked */}
      <button onClick={handleClick}>Get Random Pokemon</button>
      {/* TODO: hand down id as a prop */}
      <PokemonViewer id={id}/>
    </div>
  );
}

export default App;
