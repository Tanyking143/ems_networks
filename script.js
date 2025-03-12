document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    // Toggle menu
    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents click from reaching document
        navLinks.classList.toggle("open");
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            navLinks.classList.remove("open");
        }
    });

    // Smooth scroll and close menu on click
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            
            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            let offset = 80; // Adjust based on navbar height
            let elementPosition = targetSection.offsetTop - offset;

            window.scrollTo({ top: elementPosition, behavior: "smooth" });

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.classList.remove("open");
            }
        });
    });

    // Toggle profile menu
    profileIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        profileMenu.classList.toggle("show");
    });

    // Close profile menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!profileIcon.contains(event.target) && !profileMenu.contains(event.target)) {
            profileMenu.classList.remove("show");
        }
    });


    



    document.addEventListener("DOMContentLoaded", function () {
        const scrollToTopButton = document.getElementById("scrollToTop");
    
        if (!scrollToTopButton) {
            console.error("🚨 Scroll to top button not found in the DOM!");
            return;
        }
    
        function isMobile() {
            return window.innerWidth <= 768; // Adjust this breakpoint if needed
        }
    
        // Show/hide the button only on mobile screens when scrolling
        window.addEventListener("scroll", function () {
            if (isMobile() && window.scrollY > 200) {
                scrollToTopButton.style.display = "block"; // Show button
            } else {
                scrollToTopButton.style.display = "none"; // Hide button
            }
        });
    
        // Scroll to the top when the button is clicked
        scrollToTopButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    
        // Hide button if the screen is resized to desktop
        window.addEventListener("resize", function () {
            if (!isMobile()) {
                scrollToTopButton.style.display = "none";
            }
        });
    });
    
    
});


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".testimonial-slider");
    const clones = slider.innerHTML; // Clone existing testimonials
    slider.innerHTML += clones; // Append them for infinite scrolling
});
