const fontSizeLinks = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

fontSizeLinks.forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();

		fontSizeLinks.forEach((item) => item.classList.remove('font-size_active'));
		link.classList.add('font-size_active');

		book.classList.remove('book_fs-big', 'book_fs-small');

		const size = link.dataset.size;
		if (size === 'big') {
			book.classList.add('book_fs-big');
		} else if (size === 'small') {
			book.classList.add('book_fs-small');
		}
	});
});