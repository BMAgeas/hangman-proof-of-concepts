import "./app.css"
import React				from "react"
import LetterPlaceholder	from "./components/LetterPlaceholder"

export default () => {
	
	const word = "HYMN"
	const lpRefs = [...word].map(() => React.useRef())
	const [guessCount, setGuessCount] = React.useState(0)

	return (
		<main className="main-tag">

			<h1>Hangman</h1>
			<br/><br/>

			{
				[...word].map(
					(letter, index) => <LetterPlaceholder
						key={index}
						ref={lpRefs.at(index)}
						TargetLetter={letter.toUpperCase()}
						OnCorrectGuess={() => lpRefs.every(lpRef => lpRef.current.innerText != "_") && window.alert("All solved!")}
						OnIncorrectGuess={() => setGuessCount(prev => ++prev)}
					/>
				)
			}
			
			<br/><br/>
			{guessCount} of {word.length} lives used

		</main>
	)

}