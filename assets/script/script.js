import { Pokemon } from "./models.js";
import { cardTemplate, colors } from "./templates.js";

const pokelist = document.getElementById("pokelist");

let pokeArray = [];
let offset = 0;
let limit = 52;

async function getPokemons() {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        let data = await response.json()
        createPokeObj(data.results)
    } 
    catch(err) {
        console.error(err);
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
                data.habitat.name, //TODO: a partir de um certo numero n tem habitat
                '',
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
            )
            pokeArray.push(pokemonObj);
        }
        catch(err) {
            console.error(err);
        }

        if(i == (limit - 1)) {
            //TODO: corrigir pokeArray n sendo totalmente construido
            if (pokeArray.length == limit) {
                createCards(pokeArray);
            } else {
                window.location.reload()
            }
        }
    });
}

function createCards(pokemon) {
    pokelist.innerHTML = '';

    pokeArray = pokeArray.sort(function(a, b) {
        return a.id - b.id;
    });

    pokeArray.forEach((poke) => {
        let color = poke.color
        pokelist.innerHTML += cardTemplate(poke);
        document.getElementById(`pokecard-header-${poke.id}`)
            .style.background = colors[color].normal;
        document.getElementById(`pokecard-body-${poke.id}`)
            .style.background = colors[color].light;
    })
}

getPokemons(limit, offset);
