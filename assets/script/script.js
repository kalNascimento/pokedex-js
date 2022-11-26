import { Pokemon } from "./models.js";
import { cardTemplate, colors } from "./templates.js";

let offset = 0;
let limit = 10;

const pokelist = document.getElementById("pokelist");
let pokeArray = [];

async function getPokemons() {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        let data = await response.json();
        createPokeObj(data.results)
    } 
    catch(err) {
        console.log(err);
    }
}


function createPokeObj(pokemon) {
    let pokemonObj;

    pokemon.forEach(async (e, i) => {
        let id = e.url.slice(34).replace('/', '')
        let data;

        try {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
            data = await response.json();

            pokemonObj = new Pokemon(
                id,
                e.name,
                data.color.name,
                data.habitat.name,
                '',
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
            )
            pokeArray.push(pokemonObj);
        }
        catch(err) {
            console.log(err);
        }

        if(i == (limit - 1)) {
            createCards(pokeArray);
        }
    });
}

function createCards(pokemon) {
    let test = 0;
    test = pokeArray.sort(function(a, b) {
        return a.id - b.id;
    });

    console.log(test)
    test.forEach((poke) => {
        let color = poke.color
        pokelist.innerHTML += cardTemplate(poke);
        document.getElementById(`pokecard-header-${poke.id}`)
            .style.background = colors[color].normal;
        document.getElementById(`pokecard-body-${poke.id}`)
            .style.background = colors[color].light;
    })
}

getPokemons();
