// Function of loading page

function removeLoader() {

    setTimeout(() => {
        let loader = document.querySelector('.intro-sector');
        loader.classList.add("hidden");
    },
        5000);
}
