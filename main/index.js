window.onscroll = function(){

    const scroll = document.documentElement.scrollTop;
    console.log(scroll)

    const header = document.getElementById("header");

    if (scroll > 20){
        header.classList.add('nav_mod');
    }else if (scroll < 20){
        header.classList.remove('nav_mod');
    }

}

const toggle = document.getElementById("toggle")
const nav_menu = document.querySelector(".nav-menu")
const toggle_close = document.querySelector(".toggle-close");

toggle.addEventListener("click", activar);
toggle_close.addEventListener("click", cerrar)

function activar() {
    nav_menu.classList.toggle("nav-menu_active");
    toggle.classList.toggle('toggle-active')
    toggle_close.classList.toggle('toggle-close_active')
}
function cerrar() {
    nav_menu.classList.remove("nav-menu_active")
    toggle.classList.remove("toggle-active");
    toggle_close.classList.remove("toggle-close_active");
}




