// Navbar
$(function () {
    $("#hamburger-icon").click(function () {
        toggleNavbar();
    });
});

function toggleNavbar() {
    $(".nav-links-wrapper").toggleClass("show");
    $(".nav").toggleClass("show");
}

// Main Slideshow
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    // Get current class
    const current = document.querySelector(".current");
    // Remove current class
    current.classList.remove("current");
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add("current");
    } else {
        // Add current to start
        slides[0].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
    // Get current class
    const current = document.querySelector(".current");
    // Remove current class
    current.classList.remove("current");
    // Check for prev slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add("current");
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add("current");
    }
    setTimeout(() => current.classList.remove("current"));
};

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}
