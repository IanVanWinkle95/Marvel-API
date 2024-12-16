
import React, { useEffect, useState } from "react";
import "./index.css"
import MarvelData from "./data/MarvelData"
import Form from "./data/Form"

const apiKey = "0950794c1f3aec7b133bcffc5c5044ce"

function App() {
  const [characters, setCharacters] = useState(null);

  const getCharacters = async(searchTerm) => {
    try {
      const response = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm}&apikey=${apiKey}`
          );
      const data = await response.json();
      setCharacters(data);
    } catch(e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getCharacters("Iron Man");
  }, []);

  return (
    <div className="App">
      <Form charactersearch={getCharacters} />
      <MarvelData movie={characters} />
    </div>
  );
}

export default App;