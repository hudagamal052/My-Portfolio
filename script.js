// =====================================================
//                    MOBILE MENU
// =====================================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

const navItems = document.querySelectorAll(".nav-link");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("open");

    document.body.classList.toggle("no-scroll");

    const icon = menuBtn.querySelector("i");


    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


// =====================================================
//              CLOSE MOBILE MENU
// =====================================================

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("open");

        document.body.classList.remove("no-scroll");


        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


// =====================================================
//                ACTIVE NAV LINK
// =====================================================

const sections = document.querySelectorAll("section[id]");


function updateActiveLink() {

    const scrollPosition = window.scrollY + 150;


    sections.forEach(function (section) {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navItems.forEach(function (item) {

                item.classList.remove("active");

            });


            const activeItem =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );


            if (activeItem) {

                activeItem.classList.add("active");

            }

        }

    });

}


window.addEventListener("scroll", updateActiveLink);


// =====================================================
//                CONTACT FORM
// =====================================================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;

    }


    formMessage.textContent =
        `Thank you ${name}! Your message has been received.`;


    contactForm.reset();

});


// =====================================================
//                  CURRENT YEAR
// =====================================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =====================================================
//                SCROLL REVEAL
// =====================================================

const animatedElements =
    document.querySelectorAll(
        ".section, .project-card, .service-card, .skill-card"
    );


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


animatedElements.forEach(function (element) {

    observer.observe(element);

});