const pokeApi = {}

function ConvertPokeApiDetailToPokemon(pokemonDetail) {
    const pokemon = new Pokemon();
    pokemon.number = pokemonDetail.id;
    pokemon.name = pokemonDetail.name;
    const types = pokemonDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;
    pokemon.types = types;
    pokemon.type = type;
    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default;
    return pokemon;
}

pokeApi.GetPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(ConvertPokeApiDetailToPokemon);
}

pokeApi.GetPokemons = (offset, limit) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonResult) => jsonResult.results)
        .then((pokemonList) => pokemonList.map((pokeApi.GetPokemonDetail)))
        .then((detailRequests) => Promise.all(detailRequests))
        .catch((erro) => console.log(erro));
}


