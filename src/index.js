document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            
            const sectionId = this.getAttribute("data-section");

            sections.forEach(section => {
                section.classList.add("hidden");
            });

            document.getElementById(sectionId).classList.remove("hidden");
        });
    });

    // Show "About Me" by default
    document.getElementById("about").classList.remove("hidden");
});
