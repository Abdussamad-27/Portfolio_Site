document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTS
    ========================= */

    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");
    const header = document.querySelector(".header");
    const scrollTop = document.querySelector(".scroll-top");

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar a");


    /* =========================
       MOBILE MENU
    ========================= */

    if (menuIcon && navbar) {

        menuIcon.addEventListener("click", () => {

            menuIcon.classList.toggle("bx-x");
            navbar.classList.toggle("active");

        });

    }


    /* =========================
       CLOSE MOBILE MENU
       WHEN LINK IS CLICKED
    ========================= */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (menuIcon) {
                menuIcon.classList.remove("bx-x");
            }

            if (navbar) {
                navbar.classList.remove("active");
            }

        });

    });


    /* =========================
       HEADER + ACTIVE NAV
    ========================= */

    function handleScroll() {

        const scrollPosition = window.scrollY;

        /* Header effect */

        if (header) {

            if (scrollPosition > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        }


        /* Scroll to top button */

        if (scrollTop) {

            if (scrollPosition > 500) {
                scrollTop.classList.add("show");
            } else {
                scrollTop.classList.remove("show");
            }

        }


        /* Active navigation link */

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 180;
            const sectionHeight = section.offsetHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }


    window.addEventListener("scroll", handleScroll);

    handleScroll();


    /* =========================
       TYPED.JS
    ========================= */

    if (
        typeof Typed !== "undefined" &&
        document.querySelector(".multiple-text")
    ) {

        new Typed(".multiple-text", {

            strings: [
                "Frontend Developer",
                "BCA Student",
                "UI/UX Designer",
                "AI/ML Enthusiast"
            ],

            typeSpeed: 70,
            backSpeed: 45,
            backDelay: 1500,

            loop: true

        });

    }


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".section-label, .section-title, .section-description, " +
        ".about-image, .about-content, .skill-card, " +
        ".service-card, .projects-coming-soon, " +
        ".timeline-item, .contact-content, .contact-form"
    );


    const revealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-show");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });


    /* =========================
       CONTACT FORM
    ========================= */

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", event => {

            event.preventDefault();

            const name = document.querySelector("#name")?.value.trim();
            const email = document.querySelector("#email")?.value.trim();
            const message = document.querySelector("#message")?.value.trim();

            if (!name || !email || !message) {

                alert("Please fill in all required fields.");

                return;

            }


            /*
                The form currently does not have a backend.

                Later we can connect it to:
                - Formspree
                - EmailJS
                - Your own backend
                - Netlify Forms
            */

            alert(
                `Thanks ${name}! Your message is ready to be sent.`
            );

            contactForm.reset();

        });

    }


    /* =========================
       ESC KEY
       CLOSE MOBILE MENU
    ========================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (menuIcon) {
                menuIcon.classList.remove("bx-x");
            }

            if (navbar) {
                navbar.classList.remove("active");
            }

        }

    });

});