
//Fazendo a requisição
//E utilizando a promise (then "try" catch finally )

function convertPokemonToLi(pokemon) {
    return ` 
    <li class="pokemon__item">
         <span class="pokemon__item-number">#001</span>
         <span class="pokemon__item-name">${pokemon.name}</span>
         <div class="pokemon__item__detail">
             <ol class="pokemon__item__detail-types">
                 <li class="detail__pokemon-type">
                    grass
                    </li>
            <li class="detail__pokemon-type">
                poison
            </li>
        </ol>
        <img class="pokemon__item__detail-image"
            src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="${pokemon.name}">
    </div>
</li>
`

}
const pokemonList = document.getElementById('list-pokemons');
pokeApi.GetPokemons()
    .then((pokemonsResponse = []) => {
        pokemonList.innerHTML += pokemonsResponse.map(convertPokemonToLi).join('')
    })
    .catch((erro) => console.log(erro))


