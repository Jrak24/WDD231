document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector("#menu-button");
    const navMenu = document.querySelector("#nav-menu");

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        menuButton.classList.toggle("open");
    });
});
