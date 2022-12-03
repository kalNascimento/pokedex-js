import { Pokemon, Stats } from "./models.js";
import { colors, types } from "./templates.js";
import { cardTypeImg, cardDetailsGrafs, cardDetailsAbilities } from "./templates.js";

const pokeImg = document.getElementById('img-pokemon');
const pokeName = document.getElementById("name-pokemon");
const container = document.getElementById('container');
const containerGrafs = document.getElementById('card-grafs');
const containerAbilities = document.getElementById('card-abilities');
const imgTypeContainer = document.getElementById('img-pokeType');

let id = location.search.slice(4)

async function getPokemon() {
    let pokemon = {};
    let pokeAbilities = [];

    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        let data = await response.json();

        data.types.forEach(type => {
            let imgURL = types[type.type.name];
            imgTypeContainer.innerHTML += cardTypeImg(imgURL)
        })
        
        let pokemonStats = new Stats(
            data.stats[0].base_stat,
            data.stats[1].base_stat,
            data.stats[2].base_stat,
            data.stats[3].base_stat,
            data.stats[4].base_stat,
            data.stats[5].base_stat
        )

        pokeAbilities = data.abilities

        pokemon = new Pokemon(
            data.id,
            data.name,
            '',
            '',
            pokemonStats,
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
        )
    } 
    catch(err) {
        console.log(err);
    }

    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        let data = await response.json();

        pokemon.setColor = data.color.name;
        pokemon.setHabitat = data.habitat.name;
    }
    catch(err) {
        console.log(err);
    }

    pokeImg.setAttribute('src', pokemon.getImage);
    pokeName.innerHTML = pokemon.getName;

    let pokeStats = Object.keys(pokemon.getStats);

    pokeStats.forEach(stats => {
        let value = pokemon.stats[stats];
        let color = colors[pokemon.getColor].normal

        containerGrafs.innerHTML += cardDetailsGrafs(stats, value)
        containerGrafs.style.borderColor = color;
        container.style.borderColor = color

        let graf = document.getElementById(`graf-${stats}`).style

        graf.height = `${value}px`;
        graf.backgroundColor = color;
    })

    pokeAbilities.forEach(async pokeAbility => {
        let name = pokeAbility.ability.name
        try {
            let response = await fetch(`${pokeAbility.ability.url}`);
            let data = await response.json();
            data.effect_entries.forEach(effect => {
                if(effect.language.name == 'en'){
                    containerAbilities.innerHTML += cardDetailsAbilities(name, effect.effect)
                }
            })
        }
        catch(err) {
            console.log(err);
        }
    })
}

getPokemon()
