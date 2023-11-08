const modal = document.querySelector( '.modal' )

export const openModal = () => {
	
	modal.classList.add( 'modal-show' )
	const closeModal = setTimeout( () => {
		modal.classList.remove( 'modal-show' )
	}, 1000 )
}

modal.addEventListener( 'click', openModal )
