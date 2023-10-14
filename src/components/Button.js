import React from 'react'

const Button = props => {
	return (
		<div className='btn'>
			<button onClick={props.click}>{props.view ? 'Pokaż' : 'Ukryj'}</button>
		</div>
	)
}

export default Button
