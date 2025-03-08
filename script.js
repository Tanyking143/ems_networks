function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Show the button when user scrolls down 200px
window.onscroll = function () {
    let button = document.getElementById("scrollToTop");
    if (document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Function to scroll to the top smoothly
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}