const searchbar = document.getElementById("searchbar");
const searchbarIcon = document.getElementById("searchbar-icon-outside");

function searchVisible(bool) {
    const icon = searchbarIcon.classList
    const bar = searchbar.classList

    if (bool) {
        bar.remove('ion-hide');
        icon.add('ion-hide');
    } else {
        bar.add('ion-hide');
        icon.remove('ion-hide');
    }
}

function searchPokemon(parameter, data) {
    const pattern = new RegExp(parameter + '\\w+')
    
    data.forEach(pokemon => {
        if (pattern.test(pokemon.name)) {
            console.log(pokemon)
        }
    });
}

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