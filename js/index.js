document.addEventListener('DOMContentLoaded', function() {
    eventListeners();
    navegacionFija();
});

function eventListeners() {
    const menu = document.querySelector('.menu-nav');
    menu.addEventListener('click', barraNavegacion);
}

function barraNavegacion() {
    const navMenu = document.querySelector('.nav-principal');
    if(navMenu.classList.contains('mostrar-nav')) {
        navMenu.classList.remove('mostrar-nav');
    } else {
        navMenu.classList.add('mostrar-nav');
    }
}

const botonDark = document.querySelector('.icon-dark');
botonDark.addEventListener('click', function(e) {
    e.preventDefault();
    // background para texto productos
    const productos = document.querySelectorAll('.contenido-producto');
    productos.forEach(producto => {
        if(producto.classList.contains('producto-dark')) {
            producto.classList.remove('producto-dark');
        } else {
            producto.classList.add('producto-dark');
        }
    })

    // dark mode para el body
    document.body.style.transition = 'all 0.5s';
    if(document.body.classList.contains('dark-mode')){
        document.body.classList.remove('dark-mode');
        botonDark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bulb" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
        <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
        <line x1="9.7" y1="17" x2="14.3" y2="17" />
      </svg>`;
    } else {
        document.body.classList.add('dark-mode');
        botonDark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bulb-off" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
        <line x1="9.7" y1="17" x2="14.3" y2="17" />
      </svg>`;
    }

    const nosotros = document.querySelector('.nosotros');
    if(nosotros.classList.contains('nosotros-dark')){
        nosotros.classList.remove('nosotros-dark');
    } else {
        nosotros.classList.add('nosotros-dark');
    }
})

function navegacionFija() {
    const header = document.querySelector('.header');
    const nav = document.querySelector('.contenedor-navegacion');

    window.addEventListener('scroll', function() {
        if(nav.getBoundingClientRect().bottom < 0) {
            header.classList.add('fijo');
        } else {
            header.classList.remove('fijo');
        }
    })
}