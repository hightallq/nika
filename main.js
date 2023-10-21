// Function of loading page

function removeLoader() {

    setTimeout(() => {
        let loader = document.querySelector('.intro-sector');
        loader.classList.add("hidden");
    },
        2000);
}



// Function of side bar menu

let burger = document.querySelector('.burger');
console.log('burger', burger);
let sideNavbar = document.querySelector('.side-navbar-wrap');
console.log('side-navbar-wrap', sideNavbar);


function burgerActive() {
    if (sideNavbar.classList.contains("active")) {
        sideNavbar.classList.add("disactive");
        sideNavbar.classList.remove("active");
        burger.classList.add("disactive-burger");
        burger.classList.remove("activate");
    } else {
        sideNavbar.classList.add("active");
        sideNavbar.classList.remove("disactive");
        burger.classList.add("activate");
        burger.classList.remove("disactive-burger");
    }
}
