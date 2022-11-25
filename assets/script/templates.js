export function cardTemplate(pokemon) {
    const pokeCard = `
        <ion-col 
            id="pokecard-${pokemon.id}"
            class="ion-padding"
            size="auto">
            <a href="http://127.0.0.1:5500/pokemon_details.html?id=${pokemon.id}">
                <ion-card
                    id="pokecard-body-${pokemon.id}"
                    class="ion-text-center">
                    <img 
                        id="pokeimg-${pokemon.id}"
                        alt="Silhouette of mountains" 
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
    `
    return pokeCard;
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