// script.js for The Prophets' Trail

document.addEventListener("DOMContentLoaded", function() {
    
    // Change navbar background on scroll
    const navbar = document.querySelector('.navbar.fixed-top');
    
    // This check is necessary because some pages might not have a navbar
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

});
