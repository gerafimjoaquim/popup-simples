const btnOpenPopup = query('.btn-open-popup')
const popup = query('.popup-wrapper')

const openPopup = () => {
	popup.style.display = 'block'
}

const closePopup = event => {
	const clickedElement = event.target
	const classNamesForClosing = ['popup-wrapper', 'btn-close', 'social-networks']
	const clickedElementClassname = clickedElement.classList[0]
	const clickedElementIsASocialNatworkButton = clickedElementClassname === 'social-networks'
	
	const classNamesMatch = classNamesForClosing.some(className =>
		className === clickedElementClassname)

	if (classNamesMatch) {
		popup.style.display = 'none'
	}

	if (clickedElementIsASocialNatworkButton) {
		const socialNetworLink = 'https://t.me/gerafimjoaquim'

		setAttribute(clickedElement, 'target', '_blank')
		setAttribute(clickedElement, 'href', socialNetworLink)
	}
}

btnOpenPopup.addEventListener('click', openPopup)
popup.addEventListener('click', closePopup)
