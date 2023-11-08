

// Validation input name
const inputName = document.getElementById( 'name' )

function validateValue() {
	if ( this.value.includes( '.' ) ) {
		this.value = this.value.slice( 0, -1 )
	}
}

inputName.oninput = validateValue
