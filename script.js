
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    for (const link of navLinks) {
        link.addEventListener("click", scrollToSection);
    }

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
        }
    }
});
