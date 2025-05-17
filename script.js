document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", () => {
                navLinks.classList.toggle("show");
        menuIcon.classList.toggle("open"); // Toggle the 'open' class for the "X" effect
    });
});

