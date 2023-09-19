/* With this function we're targeting two elements, menu & icon, and whenever we click on them its either gonna add or remove the open class in that element and that open class is gonna have some styling */ 


function toggleMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}