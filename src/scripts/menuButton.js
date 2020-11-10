const hamburgerBtn = document.querySelector('.hamburger-btn-container');
const navItems = document.querySelector('.nav-items');
const root = document.querySelector('html');
let mobileMenuOpen = false;

// Add the click listener to the hamburger button
hamburgerBtn.addEventListener('click', () => {
	toggleMobileMenu();
});

function toggleMobileMenu() {
	if (!mobileMenuOpen) {
		hamburgerBtn.classList.add('mobile-menu-open');
		navItems.classList.add('mobile-menu-open');
		root.classList.add('scroll-lock');
		mobileMenuOpen = true;
	} else {
		hamburgerBtn.classList.remove('mobile-menu-open');
		navItems.classList.remove('mobile-menu-open');
		root.classList.remove('scroll-lock');
		mobileMenuOpen = false;
	}
}
