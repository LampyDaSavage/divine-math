function showHideNav() {
    var navDropdown = document.getElementById('nav-dropdown');
    if(navDropdown.style.display === 'initial') {
        navDropdown.style.display = 'none';
    } else {
        navDropdown.style.display = 'initial';
    }
}
function clickOffHideNav() {
    document.getElementById('nav-dropdown').style.display = 'none';
}