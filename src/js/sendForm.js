
const applicantForm = document.getElementById( 'form' )

function serializeForm( formNode ) {
	
	const data = new FormData( formNode )
	const arrayData = Array.from( data.entries() )
	return Object.fromEntries( arrayData )
}

async function sendData( data ) {
	return await fetch( 'https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: { 'Content-type': 'application/json; charset=UTF-8', },
		body: JSON.stringify( data ),
	} )
}

async function handleFormSubmit( event ) {
	event.preventDefault()
	const data = serializeForm( event.target )
	const res = await sendData( data )
	if ( res.status === 201 ) openModal()
}

applicantForm.addEventListener( 'submit', handleFormSubmit )

const modal = document.querySelector( '.modal' )

const openModal = () => {
	
	modal.classList.add( 'modal-show' )
	const closeModal = setTimeout( () => {
		modal.classList.remove( 'modal-show' )
	}, 1000 )
}

modal.addEventListener( 'click', openModal )
