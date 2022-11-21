import { Pokemon, Stats } from "./models.js";
import { cardTemplate } from "./templates.js";

const pokeDetails = document.getElementById('poke-details');

let id = location.search.slice(4)

async function getPokemons() {
    let pokemon;

    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let data = await response.json();

        let pokemonStats = new Stats(
            data.stats[0].base_stat,
            data.stats[1].base_stat,
            data.stats[2].base_stat,
            data.stats[3].base_stat,
            data.stats[4].base_stat,
            data.stats[5].base_stat
        )

        pokemon = new Pokemon(
            data.id,
            data.name,
            '',
            '',
            pokemonStats,
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
        )
        pokeDetails.innerHTML = cardTemplate(pokemon);
    } 
    catch(err) {
        console.log(err);
    }

    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        let data = await response.json();

        pokemon.setColor = data.color.name;
        pokemon.setHabitat = data.habitat.name;

        console.log(pokemon)
    }
    catch(err) {
        console.log(err);
    }

    document.getElementById(`pokecard-header-${pokemon.id}`).style.background = `${pokemon.color}`;
    document.getElementById(`pokecard-body-${pokemon.id}`).style.background = `light${pokemon.color}`;
}

getPokemons()
