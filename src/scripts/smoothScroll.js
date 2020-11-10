function smoothScroll(target, duration) {
	// Get the element we'd like to scroll to
	let el = document.querySelector(target);
	// Get the top position of the element on the page
	let position = el.getBoundingClientRect().top;
	// Get our current location on the page
	let currentPosition = window.pageYOffset;
	// Start the time out at 0
	let start = null;

	// Determine if the page has reached the position and recursively call the function until it is
	function startScroll(time) {
		if (start === null) start = time;
		let timeElapsed = time - start;
		let scroll = ease(timeElapsed, currentPosition, position, duration);
		window.scrollTo(0, scroll);
		if (timeElapsed < duration) requestAnimationFrame(startScroll);
	}

	// Easing function found here http://www.gizma.com/easing/
	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t * t + b;
		t -= 2;
		return (c / 2) * (t * t * t + 2) + b;
	}

	// Start the call to the start scroll function
	requestAnimationFrame(startScroll);
}

// Add our event listeners to the buttons
const learnMore = document.getElementById('learnMoreBtn');
const contactUs = document.getElementById('contactUsBtn');
const navServices = document.getElementById('navServices');
const navAbout = document.getElementById('navAbout');
const navContact = document.getElementById('navContact');

learnMore.addEventListener('click', () => {
	smoothScroll('.about-section', 1000);
});

contactUs.addEventListener('click', () => {
	smoothScroll('.contact-form', 1000);
});

navServices.addEventListener('click', (e) => {
	e.preventDefault();
	if (window.innerWidth < 768) toggleMobileMenu(); // If on mobile, close the menu tray on click
	smoothScroll('#services', 1000);
});

navAbout.addEventListener('click', (e) => {
	e.preventDefault();
	if (window.innerWidth < 768) toggleMobileMenu();
	smoothScroll('#about', 1000);
});

navContact.addEventListener('click', (e) => {
	e.preventDefault();
	if (window.innerWidth < 768) toggleMobileMenu();
	smoothScroll('#contact', 1000);
});
