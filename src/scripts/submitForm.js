const contactFormName = document.getElementById('form-name');
const contactFormEmail = document.getElementById('form-email');
const contactFormTextarea = document.getElementById('form-textarea');
const contactForm = document.getElementById('contact-form');
const spinner = document.getElementById('form-spinner');
const message = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
	// Prevent submit since we're not doing anything with the response
	e.preventDefault();
	// Run a spinner
	spinner.classList.add('spinner-spinning');
	spinner.classList.remove('spinner-off');

	// Place this code in an interval to simulate a server call
	setInterval(() => {
		contactFormName.value = '';
		contactFormEmail.value = '';
		contactFormTextarea.value = '';
		spinner.classList.add('spinner-off');
		spinner.classList.remove('spinner-spinning');
		message.innerHTML = 'Thanks for your submission!';
	}, 2000);
});
