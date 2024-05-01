var menu = document.getElementById('menu-box');
var hamburger = document.getElementById('hamburger').addEventListener('click', function(){
    document.getElementById('menu-box').classList.toggle('show');
    // menu.style.right = menu.style.right === '0px' ? '-300px' : '0px';
});