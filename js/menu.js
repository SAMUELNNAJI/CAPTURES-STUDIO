// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu when hamburger is clicked
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('header')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});



// Photographs Tab Functionality
const tabButtons = document.querySelectorAll('.tab_btn');
const contentItems = document.querySelectorAll('.Photograps .content');

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and content
        tabButtons.forEach(btn => btn.classList.remove('active'));
        contentItems.forEach(item => item.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        if (contentItems[index]) {
            contentItems[index].classList.add('active');
        }
    });
});

// Set first tab as active by default
if (tabButtons.length > 0) {
    tabButtons[0].classList.add('active');
    if (contentItems.length > 0) {
        contentItems[0].classList.add('active');
    }
}
