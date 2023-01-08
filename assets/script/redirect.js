const protocol = window.location.protocol;
let host = window.location.href;

if (protocol == "file:") host = window.location.href.slice(0, 48);

setTimeout(() => {
    window.location.href = `${host}pokemons_list.html?init=0&end=20`;
}, 3000)
