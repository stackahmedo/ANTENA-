const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

if (menuToggle && navLinks) {
    const closeMenu = () => {
        body.classList.remove("menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
    };

    const toggleMenu = () => {
        const isOpen = body.classList.toggle("menu-open");
        menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };

    menuToggle.addEventListener("click", toggleMenu);

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && body.classList.contains("menu-open")) {
            closeMenu();
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        const href = anchor.getAttribute("href");
        if (!href || href === "#") {
            return;
        }
        const target = document.querySelector(href);
        if (!target) {
            return;
        }
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});
