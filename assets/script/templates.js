export function cardTemplate(pokemon) {
    const pokeCard = `
        <ion-col 
            id="pokecard-${pokemon.id}"
            class="ion-padding">
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