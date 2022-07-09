var nav = document.body.childNodes[1]
var button = document.getElementById('nav-projects');

var menu = document.createElement('div');
menu.className = 'nav-menu';
menu.display = 'none';
document.body.insertBefore(menu, nav);

function toggle() {
    if (menu.display == 'none') {
        menu.display = 'flex';
    } else {
        menu.display = 'none';
    }
}