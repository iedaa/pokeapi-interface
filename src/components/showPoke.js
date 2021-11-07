const ShowPoke = (props) => {

    function capitalize(s) {
        return s.toLowerCase().replace(/\b./g, function (a) { return a.toUpperCase(); });
    };

    if (props.pokemon) {

        const pokemon = props.pokemon

        return (
            <div class="card" style={{ width: "15rem", margin: '0 auto' }}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon != null ? pokemon.id : 0}.png`} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{pokemon != null ? capitalize(pokemon.name) : null} - #{pokemon != null ? pokemon.id : null}</h5>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon != null ? pokemon.id : 0}.png`} />
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon != null ? pokemon.id : 0}.png`} />
                </div>
            </div>
        )

    } else {

        return (
            <div class="card" style={{ width: "15rem", margin: '0 auto' }}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${0}.png`} class="card-img-top" />
                <div class="card-body">
                    <a>Você precisa pesquisar um pokémon na barra de pesquisa acima.</a>
                </div>
            </div>
        )

    }

}

export default ShowPoke