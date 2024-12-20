const hamburger = document.getElementById('hamMenu');
const menu = document.getElementById('navLinks');


hamburger.addEventListener('click', () => {

    menu.classList.toggle('show');

});