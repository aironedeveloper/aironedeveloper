const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Mobile menu open/close
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Menu link click hone par mobile menu close
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});