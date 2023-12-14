# Hangman POCs Project

### Usage
```
git clone https://github.com/BMAgeas/hangman-proof-of-concepts
cd .\hangman-proof-of-concepts\
npm i
npm start
```

_BM/23_







<!--

	/*
		Plan:
			- Fetch /WordList.txt and select a random word
			- Generate lpRefs for each letter of word
			- 
		
		Well useEffect() could be used to run when the component renders.
		We only want the above to run on the FIRST render.
		There is no variable wherefor a value-change should trigger a re-render;
		word and lpRefs should only be set ONCE, on the initial component render.
		So we should be using useEffect() with an empty dependancies array.
	*/

-->