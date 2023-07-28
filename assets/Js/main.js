
//Fazendo a requisição
//E utilizando a promise (then "try" catch finally )
const pokemonList = document.getElementById('list-pokemons');
const loadMoreButton = document.getElementById('loadMoreButton');
const limit = 5;
let offset = 0;
const pokemonLimitRecords=150;
loadPokemonItens(offset, limit);


function loadPokemonItens(offset, limit) {
    pokeApi.GetPokemons(offset, limit)
        .then((pokemonsResponse = []) => {
            pokemonList.innerHTML += pokemonsResponse.map((pokemon) => `
        <li class="pokemon__item ${pokemon.type}">
             <span class="pokemon__item-number">#${pokemon.number}</span>
             <span class="pokemon__item-name">${pokemon.name}</span>
            <div class="pokemon__item__detail">
               <ol class="pokemon__item__detail-types">
                   ${pokemon.types.map((type) => `<li class="detail__pokemon-type ${type}">${type}</li>`).join('')}  
                  </ol>
              <img class="pokemon__item__detail-image"
                        src="${pokemon.photo}"
                        alt="${pokemon.name}">
                 </div>
        </li>`).join('')
        })
        .catch((erro) => console.log(erro))
}

loadMoreButton.addEventListener('click', () => {
    offset += limit;
        const recordNexPage= offset+limit;

    if(recordNexPage>=pokemonLimitRecords){ 
        const newLimitRecord= pokemonLimitRecords - offset;       
        loadPokemonItens(offset, newLimitRecord)
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }else{
        loadPokemonItens(offset,limit);
    }    
})



