import { Pokemon } from "./models.js";
import { cardTemplate } from "./templates.js";

const pokelist = document.getElementById("pokelist");
let pokeArray = [];

async function getPokemons() {
    try {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`);
        let data = await response.json();
        createPokeObj(data.results)
    } 
    catch(err) {
        console.log(err);
    }
}


function createPokeObj(pokemon) {
    let pokemonObj;

    pokemon.forEach(e => {
        let id = e.url.slice(34).replace('/', '')
        pokemonObj = new Pokemon(
            id,
            e.name,
            '',
            '',
            '',
            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
        )
        pokeArray.push(pokemonObj);
    });
    createCards(20);
}

function createCards(qttd) {
    for(let i = 0; i < qttd; i++) {
        let id = pokeArray[i].id;
        pokelist.innerHTML += cardTemplate(pokeArray[i]);
        document.getElementById(`pokecard-header-${id}`).style.background = "red";
        document.getElementById(`pokecard-body-${id}`).style.background = "pink";
        console.log(id)
    }
}

getPokemons();





function getColor(id) {
    let img = new Image();
    img.src= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;
    img.crossOrigin = "Anonymous";

    var blockSize = 5,
        defaultRGB = {r:0,g:0,b:0},
        canvas = document.createElement('canvas'),
        context = canvas.getContext && canvas.getContext('2d'),
        data, width, height,
        i = -4,
        length,
        rgb = {r:0,g:0,b:0},
        count = 0;

    if (!context) {
        return defaultRGB;
    }

    height = canvas.height = img.height;
    width = canvas.width = img.width;

    context.drawImage(img, 0, 0);


    try {
        data = context.getImageData(0, 0, width, height);
    }
    catch {
        console.log('error')
    }

    length = data.data.length;

    while ( (i += blockSize * 4) < length ) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i+1];
        rgb.b += data.data[i+2];
    }

    rgb.r = ~~(rgb.r/count);
    rgb.g = ~~(rgb.g/count);
    rgb.b = ~~(rgb.b/count);

    return rgb;
}