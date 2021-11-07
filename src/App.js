import { useState } from "react";
import ShowPoke from "./components/showPoke";
import api from "./services/api";

function App() {

  const [ pokemon, setPokemon ] = useState()

  const [value, setValue] = useState('')

  function capitalize(s) {
    return s.toLowerCase().replace(/\b./g, function (a) { return a.toUpperCase(); });
  };

  const handleChange = (event) => {

    setValue(event.target.value)

  }

  const handleSubmit = () => {

    getPokemon(value.toLowerCase())

  }

  const getPokemon = async (pokeName) => {

    console.log(pokeName)

    api.get(`/${pokeName}`)
      .then(async (response) => {

        setPokemon(response.data)

      })

      .catch((error) => {
        console.log('error: ' + error)
      })

  }

  return (
    <div className="container" style={{ marginTop: '50px', width: ' 50%' }}>
      <header className="App-header">

        <div class="input-group mb-3">
          <button class="btn btn-outline-primary" type="button" id="button-addon1" onClick={handleSubmit} >Pesquisar</button>
          <input type="text" class="form-control" placeholder="Nome ou ID do Pokémon" aria-label="Example text with button addon" aria-describedby="button-addon1" value={value} onChange={handleChange} />
        </div>

        <ShowPoke pokemon={pokemon} />

      </header>
    </div>
  );
}

export default App;
