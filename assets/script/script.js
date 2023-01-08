import { Pokemon } from "./models.js";
import { cardTemplate, colors } from "./templates.js";
import { searchPokemon } from "./function.js";

const pokelist = document.getElementById("pokelist");
const searchbarClickAction = document.getElementById("searchbar-icon-inside");
const searchbarEnterAction = document.getElementById("input");
const avancarPag = document.getElementById("avancar");
const voltarPag = document.getElementById("voltar");

let host = window.location.search;

let pokeArray = [];
let offset = 0;
let limit = 20;

if (host == '') {
    window.location.href = `${host}pokemons_list.html?init=0&end=20`;
}

getParams();

function getParams() {
    host = host.split(/\?|&/);
    host.shift()

    offset = host[0].split("=")[1];
    limit = host[1].split("=")[1];
}


avancarPag.addEventListener('click', () => {
    offset = limit;
    limit = Number(limit) + 20;

    window.location.href = `pokemons_list.html?init=${offset}&end=${limit}`;
});

voltarPag.addEventListener('click', () => {
    offset = offset - 20;
    limit = Number(limit) - 20;

    if (offset < 0) {
        window.location.href = `pokemons_list.html?init=0&end=20`;
    } else {
        window.location.href = `pokemons_list.html?init=${offset}&end=${limit}`;
    }
});

async function getPokemons() {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=386&offset=0`);
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
                voltarPag.setAttribute('disabled', false);
                avancarPag.setAttribute('disabled', false);
                createCards(pokeArray);
            } else {
                window.location.reload()
            }
        }
    });
}

function createCards(pokemon) {
    if (pokemon == '') {
        pokemon = pokeArray;
    }

    pokelist.innerHTML = '';

    pokemon = pokemon.sort(function(a, b) {
        return a.id - b.id;
    });

    pokemon.forEach((poke, index) => {
        if (index < limit && index >= offset) {
            let color = poke.color
            pokelist.innerHTML += cardTemplate(poke);
            document.getElementById(`pokecard-header-${poke.id}`)
                .style.background = colors[color].normal;
            document.getElementById(`pokecard-body-${poke.id}`)
                .style.background = colors[color].light;
        }
    })
}

searchbarEnterAction.addEventListener('keypress', (event) => {
    let pokeSearch;

    if (event.key == 'Enter') {
        if (searchbarEnterAction.value == '') {
            voltarPag.setAttribute('disabled', false);
            avancarPag.setAttribute('disabled', false);
            pokeSearch = pokeArray;
        } else {
            pokeSearch = searchPokemon(searchbarEnterAction.value, pokeArray);
            voltarPag.setAttribute('disabled', true);
            avancarPag.setAttribute('disabled', true);
        }
        createCards(pokeSearch);
    }
});

searchbarClickAction.addEventListener('click', () => {
    if (searchbarEnterAction.value == '') {
        voltarPag.setAttribute('disabled', false);
        avancarPag.setAttribute('disabled', false);
        pokeSearch = pokeArray;
    } else {
        pokeSearch = searchPokemon(searchbarEnterAction.value, pokeArray);
        voltarPag.setAttribute('disabled', true);
        avancarPag.setAttribute('disabled', true);
    }
    createCards(pokeSearch);
});

getPokemons();

