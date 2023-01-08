const searchbar = document.getElementById("searchbar");
const searchbarOpen = document.getElementById("searchbar-icon-outside");
const searchbarClose = document.getElementById("searchbar-icon");

const iconOpen = searchbarOpen.classList;
const iconClose = searchbarClose.classList;
const bar = searchbar.classList;

searchbarOpen.addEventListener('click', () => {
    bar.remove('ion-hide');
    iconClose.remove('ion-hide');
    iconOpen.add('ion-hide');
});

searchbarClose.addEventListener('click', () => {
    bar.add('ion-hide');
    iconClose.add('ion-hide');
    iconOpen.remove('ion-hide');
});

export function searchPokemon(parameter, data) {

    if (parameter == '' || data == '')
        return '';
        
    const pattern = new RegExp(parameter + '\\w+')
    const pokeArray = [];
    
    data.forEach(pokemon => {
        if (pattern.test(pokemon.name)) {
            pokeArray.push(pokemon)
        }
    });

    return pokeArray;
}