const host = window.location.hostname;

console.log(window.location.hostname)

setTimeout(() => {
    console.log('ok')
    window.location.href = `/pokemons_list.html`;
}, 3000)
