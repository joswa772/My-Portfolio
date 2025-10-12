document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", () => {
                navLinks.classList.toggle("show");
        menuIcon.classList.toggle("open"); // Toggle the 'open' class for the "X" effect
    });
});

// Parallax effect for hero, skills, and experience background
window.addEventListener("scroll", function () {
    const scrolled = window.scrollY;
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.backgroundPosition = `center ${Math.max(0, 50 - scrolled * 0.15)}% `;
    }
    // const skills = document.querySelector(".skills");
    // if (skills) {
    //     skills.style.backgroundPosition = `center, left ${Math.max(0, 50 - scrolled * 0.10)}%`;
    // }
    const experience = document.querySelector(".experience");
    if (experience) {
        // Continue the hero parallax effect into the experience section
        experience.style.backgroundPosition = `center ${Math.max(0, 50 - scrolled * 0.15)}% center`;
    }
});

