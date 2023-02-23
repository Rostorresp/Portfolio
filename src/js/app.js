const body = document.querySelector('body');
const navegacion = document.querySelector('.navegacion__responsive');

//botones menu
const menuButton = document.querySelector('#menu');
const closeButton = document.querySelector('#close');

menuButton.addEventListener('click', toggleNav);
closeButton.addEventListener('click', toggleNav);

function toggleNav() {
    navegacion.classList.toggle('is-active');
    body.classList.toggle('noscroll');
    menuButton.classList.toggle('hidden');
    closeButton.classList.toggle('hidden');
}

////enlaces
const enlacesResponsive = document.querySelectorAll('.navegacion__enlace-responsive');
const enlaces = document.querySelectorAll('.navegacion-enlace');

function selectEnlace(enlaces, e) {
    enlaces.forEach(enlace => enlace.classList.remove('active'));
    e.target.classList.add('active');
}

enlaces.forEach(enlace => enlace.addEventListener('click', selectEnlace.bind(null, enlaces)));

enlacesResponsive.forEach(enlace => {
    enlace.addEventListener('click', selectEnlace.bind(null, enlacesResponsive));
    enlace.addEventListener('click', toggleNav);
});


////////////////////scroll up/////////////////
const scrollBtn = document.getElementById('scrollBtn');
const btonHouse = document.getElementById('btonHouse');
const arrowUp = document.getElementById('arrowUp');

scrollBtn.addEventListener('click', function () {
    if (window.pageYOffset === 0) return;
    btonHouse.style.display = 'none';
    arrowUp.style.display = 'inline-block';

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    setTimeout(function () {
        btonHouse.style.display = 'inline-block';
        arrowUp.style.display = 'none';
    }, 2000);
});

btonHouse.addEventListener('click', () => {
    enlaces.forEach(enlace => enlace.classList.remove('active'));
});

//smooth

document.addEventListener('DOMContentLoaded', function () {
    scrollNav()
    navegacionFija()
});

function navegacionFija() {
    const barra = document.querySelector('.menu-fixed')
    const hero = document.querySelector('.hero')
    const body = document.querySelector('body')

    window.addEventListener('scroll', function () {
        if (hero.getBoundingClientRect().bottom < 0) {
            barra.classList.add('fijo');
            body.classList.add('body-scroll')

        } else {
            barra.classList.remove('fijo');
            body.classList.remove('body-scroll')
        }
    })
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a, .navegacion__responsive a');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault()

            const seccion = document.querySelector(e.target.attributes.href.value);
            seccion.scrollIntoView({ behavior: 'smooth' });

        });
    });
}
