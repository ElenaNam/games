const turnCard = () => {
	const cards = document.querySelectorAll('.card');
	cards.forEach(card => {
		const cardFront = card.querySelector('.card__front');
		const cardBack = card.querySelector('.card__back');

		card.addEventListener('click', (e) => {
			cardFront.classList.toggle('hide')
			cardBack.classList.toggle('hide')
		})
	})
}
export default turnCard;
