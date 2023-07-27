
//Fazendo a requisição
//E utilizando a promise (then "try" catch finally )

function convertPokemonToLi(pokemon) {
    return ` 
    <li class="pokemon__item ${pokemon.type}">
         <span class="pokemon__item-number">#${pokemon.number}</span>
         <span class="pokemon__item-name">${pokemon.name}</span>
         <div class="pokemon__item__detail">
             <ol class="pokemon__item__detail-types">

           ${pokemon.types.map((type)=>`<li class="detail__pokemon-type ${type}">${type}</li>`).join('') }  
        </ol>
        <img class="pokemon__item__detail-image"
            src="${pokemon.photo}"
            alt="${pokemon.name}">
    </div>
</li>
`

}
const pokemonList = document.getElementById('list-pokemons');
pokeApi.GetPokemons()
    .then((pokemonsResponse = []) => {
        pokemonList.innerHTML = pokemonsResponse.map(convertPokemonToLi).join('')
    })
    .catch((erro) => console.log(erro))


