const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
let menuItem = document.querySelectorAll('.menu-item');

const menuToggle = () => {
    menu.classList.toggle('menu-active');
}

burger.addEventListener('click', menuToggle);
menuItem.forEach(e => {
    e.addEventListener('click', menuToggle);
});