export function cardTemplate(pokemon) {
    const pokeCard = 
        `
            <ion-col
                id="pokecard-${pokemon.id}"
                class="ion-padding"
                size="auto">
                <a 
                    title="Click para ver mais detalhes"
                    href="pokemon_details.html?id=${pokemon.id}">
                    <ion-card
                        id="pokecard-body-${pokemon.id}"
                        class="ion-text-center">
                        <img 
                            id="pokeimg-${pokemon.id}"
                            alt="pokemon S2" 
                            src="${pokemon.image}" />
                        <ion-card-header
                            id="pokecard-header-${pokemon.id}">
                            <ion-card-title 
                                class="ion-padding ion-text-center ion-text-capitalize">
                                ${pokemon.name}
                            </ion-card-title>
                        </ion-card-header>
                    </ion-card>
                </a>
            </ion-col>
        `;
    return pokeCard;
}

export function cardDetailsGrafs(name, value) {
    const grafs = 
        `
            <ion-col>
                <ion-grid>
                    <i-col 
                        class="flex column ai-center"
                        size="auto">
                        <ion-row>
                            <p class="stats-number">${value}</p>
                        </ion-row>
                        <ion-row
                            id="graf-${name}"
                            class="graf">
                        </ion-row>
                        <ion-row>
                            <p id="" class="stats-name">${name.replace("_", " ")}</p>
                        </ion-row>
                    </i-col>
                </ion-grid>
            </ion-col>
        `;
    return grafs;
}

export function cardDetailsAbilities(name, desc) { 
    const abilites = 
        `
            <ion-row 
                id="" 
                class="ion-justify-content-center">
                <ion-card
                    class="ability ion-margin-bottom"
                    color="primary">
                    <ion-col>
                        <ion-row class="ion-padding-horizontal ion-justify-content-center">
                            <ion-title class="ion-padding">${name}</ion-title>
                        </ion-row>
                        <ion-row class="ion-padding-horizontal ion-justify-content-center">
                            <ion-subtitle class="desc-ability">${desc}</ion-subtitle>
                        </ion-row>
                    </ion-col>
                </ion-card>
            </ion-row>
        `;
    return abilites;
}

export function cardTypeImg(imgURL) {
    const img = 
        `
            <ion-col size="auto">
                <img 
                    alt="pokemons s2"
                    class="img-type" 
                    src="${imgURL}" />
            </ion-col>
        `
    return img;
}

export const colors = {
    'red': {
        normal:'#F24C36',
        light: '#FCA99E'
    },
    'blue': {
        normal:'#71BCF9',
        light: '#D3EBFF'
    },
    'green': {
        normal:'#5FA189',
        light: '#B4EDE3'
    },
    'yellow': {
        normal:'#FFE655',
        light: '#FFFCD6'
    },
    'purple': {
        normal:'#9849A4',
        light: '#B798BB'
    },
    'pink': {
        normal:'#F832A9',
        light: '#FDBCE3'
    },
    'brown': {
        normal:'#AB6E2A',
        light: '#CABBAB'
    },
    'black': {
        normal:'#7B7B7B',
        light: '#CACACA'
    },
    'gray': {
        normal:'#B3B1B1',
        light: '#E5E5E5'
    },
    'white': {
        normal:'#E5E5E5',
        light: '#FEFEFE'
    },
}

export const types = {
    'normal': '../assets/img/Pokemon_Type_Icon_Normal.svg',
    'fire': '../assets/img/Pokemon_Type_Icon_Fire.svg',
    'water': '../assets/img/Pokemon_Type_Icon_Water.svg',
    'grass': '../assets/img/Pokemon_Type_Icon_Grass.svg',
    'flying': '../assets/img/Pokemon_Type_Icon_Flying.svg',
    'fighting': '../assets/img/Pokemon_Type_Icon_Fighting.svg',
    'poison': '../assets/img/Pokemon_Type_Icon_Poison.svg',
    'electric': '../assets/img/Pokemon_Type_Icon_Electric.svg',
    'ground': '../assets/img/Pokemon_Type_Icon_Ground.svg',
    'rock': '../assets/img/Pokemon_Type_Icon_Rock.svg',
    'psychic': '../assets/img/Pokemon_Type_Icon_Psychic.svg',
    'ice': '../assets/img/Pokemon_Type_Icon_Ice.svg',
    'bug': '../assets/img/Pokemon_Type_Icon_Bug.svg',
    'ghost': '../assets/img/Pokemon_Type_Icon_Ghost.svg',
    'steel': '../assets/img/Pokemon_Type_Icon_Steel.svg',
    'dragon': '../assets/img/Pokemon_Type_Icon_Dragon.svg',
    'dark': '../assets/img/Pokemon_Type_Icon_Dark.svg',
    'fairy': '../assets/img/Pokemon_Type_Icon_Fairy.svg'
}