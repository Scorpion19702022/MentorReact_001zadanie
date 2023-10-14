import React, { useState } from 'react'
import './App.css'

import Button from './components/Button'
import Content from './components/Content'

const App = () => {
	const [view, setView] = useState(false)

	const handleClick = () => {
		setView(!view)
	}

	return (
		<div className={view ? 'AppLight' : 'AppDark'}>
			<h1 className={view ? 'headingDark' : 'headingLight'}>Zadanie</h1>
			<p className={view ? 'textDark' : 'textLight'}>Pokaż/Ukryj tekst. Zmień kolory jak będzie widoczny</p>
			<Button click={handleClick} view={view} />
			<Content view={!view} />
		</div>
	)
}

export default App
