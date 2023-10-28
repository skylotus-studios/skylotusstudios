const mobileMenuButton = document.querySelector("button[aria-controls='mobile-menu']");
const mobileMenu = document.getElementById("mobile-menu");
const openIcon = mobileMenuButton.querySelector("svg.block");   // Icon when menu is closed (hamburger)
const closeIcon = mobileMenuButton.querySelector("svg.hidden"); // Icon when menu is open (cross)

mobileMenu.style.display = 'none';
mobileMenuButton.setAttribute('aria-expanded', 'false');
openIcon.classList.remove('hidden');
closeIcon.classList.add('hidden');


mobileMenuButton.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    
    // Toggle the menu display
    mobileMenu.style.display = isExpanded ? 'none' : 'block';

    // Toggle the icons
    openIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');

    // Update the aria-expanded state
    this.setAttribute('aria-expanded', !isExpanded);
});

// Hide mobile menu on large screens
window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024) {  // 1024px is the default breakpoint for lg in Tailwind, adjust if needed
        mobileMenu.style.display = 'none';
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => {
                nav.classList.remove('border-skyblue');
                nav.classList.add('border-transparent');
            });

            this.classList.remove('border-transparent');
            this.classList.add('border-skyblue');
        });
    });
});

function getVisibleSection() {
    const sections = document.querySelectorAll('section[id]');

    let closest = null;
    let lastYOffset = 0;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const yOffset = Math.abs(rect.top);

        if (closest === null || yOffset < lastYOffset) {
            closest = section;
            lastYOffset = yOffset;
        }
    });

    return closest;
}

window.addEventListener('scroll', function() {
    const visibleSection = getVisibleSection();
    if (visibleSection) {
        console.log(visibleSection.id);
        const links = document.querySelectorAll(`nav a[href="#${visibleSection.id}"]`);
        
        if (links) {
            
            let navLinks = document.querySelectorAll('nav a[href^="#"]');
            navLinks.forEach(link => {
                link.classList.remove('border-skyblue');
                link.classList.add('border-transparent');
            });

            links.forEach(link =>{
                link.classList.remove('border-transparent');
                link.classList.add('border-skyblue');
            });
        }
    }
});

