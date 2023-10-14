import React, { useState } from 'react'
import './App.css'

const App = () => {
	const [view, setView] = useState(false)

	return (
		<div className={view ? 'AppLight' : 'AppDark'}>
			<h1>Zadanie</h1>
			<p>Pokaż - ukryj tekst. Zmień kolory tła</p>
		</div>
	)
}

export default App
