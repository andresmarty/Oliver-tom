document.addEventListener('DOMContentLoaded', () => {

const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navBarLinks = document.getElementsByClassName("navbar-links")[0]
const displayButton = document.querySelectorAll('.hvr-underline-from-left')

toggleButton.addEventListener("click", () => {
    navBarLinks.classList.toggle('active')
    });

displayButton.forEach(button => button.addEventListener("click", () => {
    navBarLinks.classList.toggle('active')
}))

const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1200
});
});
