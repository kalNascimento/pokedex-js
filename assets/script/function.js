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