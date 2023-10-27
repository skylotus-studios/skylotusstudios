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