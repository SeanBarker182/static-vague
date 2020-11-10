// Animate the header items
gsap.from('.cta-item', { opacity: 0, y: -50, duration: 0.5, stagger: 0.6 });
gsap.from('.services-card', { y: 55, duration: 1, delay: 0.85 });

ScrollTrigger.matchMedia({
	// Hide the yellow bg and pull it out once the user gets to the center of the box
	'(min-width: 1027px)': function () {
		gsap.from('.services-server-bg', {
			scrollTrigger: {
				trigger: '.services-server-img',
				start: 'top center',
			},
			y: '-75px',
			x: '-50px',
			duration: 1.5,
		});
	},
	// Different numbers for medium to hide it behind the image
	'(max-width: 1026px)': function () {
		gsap.from('.services-server-bg', {
			scrollTrigger: {
				trigger: '.services-server-img',
				start: 'top center',
			},
			y: '-50px',
			x: '-35px',
			duration: 1.5,
		});
	},
	// Do this on all viewports
	all: function () {
		gsap.from('.about-text-container', {
			scrollTrigger: {
				trigger: '.about-section-bg',
				start: 'top bottom',
			},
			x: 500,
			opacity: 0,
			duration: 1.5,
		});
	},
});
