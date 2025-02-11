$(document).ready(function () {
    $(".homeslide").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        items: 1,
        autoHeight: true,
    });
    $(".logo_th").owlCarousel({
        loop: true,
        margin: 10,
        lazyLoad: true,
        nav: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 2, // Show 2 items on mobile
            },
            600: {
                items: 3, // Show 3 items on larger screens
            },
            1000: {
                items: 5, // Show 5 items on extra large screens
            },
        },
        items: 6,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuPopup = document.querySelector(".menu-popup");
    const closePopup = document.querySelector(".close-popup");

    menuToggle.addEventListener("click", function (e) {
        e.preventDefault();
        menuPopup.classList.add("active");
        document.body.style.overflow = "hidden"; // Prevent scrolling
    });

    closePopup.addEventListener("click", function () {
        menuPopup.classList.remove("active");
        document.body.style.overflow = ""; // Enable scrolling
    });
});