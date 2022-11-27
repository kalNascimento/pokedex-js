const protocol = window.location.protocol;
let host = window.location.href;

if (protocol == 'file:') host = window.location.href.slice(0, 48);

setTimeout(() => {
    console.log('ok')
    window.location.href = `${host}pokemons_list.html`;
}, 3000)
