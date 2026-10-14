const revealElements = document.querySelectorAll('.reveal');

function checkReveal() {
	const windowHeight = window.innerHeight;

	revealElements.forEach((element) => {
		const elementTop = element.getBoundingClientRect().top;

		if (elementTop < windowHeight - 100) {
			element.classList.add('reveal_active');
		}
	});
}

window.addEventListener('scroll', checkReveal);

checkReveal();