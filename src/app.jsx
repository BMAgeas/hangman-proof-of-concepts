import React				from "react"
import LetterPlaceholder	from "./components/LetterPlaceholder"

const getRandomWord = async () => {
	
	const response	= await fetch("/WordList.txt")
	const text		= await response.text()
	if (!response.ok) { throw new Error(`Could not load words' list. Status ${response.status()}. Text ${text}`) }
	
	const words = text.split("\n")
	return words[Math.floor(Math.random() * words.length)]

}

export default () => {
	
	const [guessCount, setGuessCount]	= React.useState(0)
	const [word, setWord]				= React.useState("")
	const [lpRefs]						= React.useState( (new Array(99)).fill().map(() => React.useRef()) )
	
	// When this component is rendered, pick a random word from /WordsList.txt
	React.useEffect(
		() => {	getRandomWord().then(setWord).catch(window.alert) },
		[]
	)
	
	return (
		<main style={{ textAlign : "center" }}>
		
			<h1>Hangman</h1>
			<br/><br/>

			{
				[...word].map(
					(letter, index) => <LetterPlaceholder
						key={index}
						fowardRef={lpRefs.at(index)}
						targetLetter={letter.toUpperCase()}
						allLPs={lpRefs}
						onIncorrectGuess={() => setGuessCount(prev => ++prev)}
						onClick={() => setLettersGuessed((lettersGuessed) => lettersGuessed.push("a"))}
					/>
				)
			}
			
			<br/><br/>
			{
				(guessCount <= word.length)
					? `${guessCount} of ${word.length} lives used`
					: "GAME_OVER"
			}

			<br/>
			<p style={{ fontSize : "5px" }}>{word}</p>

		</main>
	)

}