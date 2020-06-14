import '../scss/main.scss';

/* place your code below */

const hamburger = document.querySelector('.navigation__hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('.menu--js')
    nav.classList.toggle('menu--open');
})

const name = 'Łukasz';
const age = 31;

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent ('.hero__subheading--js', `Hej! Mam na imię ${name} i mam ${age} lat`);

console.log('HELLO 🚀')