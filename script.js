
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Toggle mobile navigation
menuBtn.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// Display the current year automatically
document.getElementById("year").textContent =
    new Date().getFullYear();

console.log("Portfolio JavaScript connected successfully!");
