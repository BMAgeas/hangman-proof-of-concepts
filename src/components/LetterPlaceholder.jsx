import React from "react"

export default React.forwardRef(
	(props, ref) =>
	<div
		ref={ref}
		style={{ fontSize : "4rem", display : "inline", padding : "1rem" }}
		onClick={
			(e) => {
				const newLetter = [...(window.prompt("Guess letter value...") || "_")].at(0).toUpperCase()
				if (newLetter === props.TargetLetter) { e.target.innerText = newLetter; props.OnCorrectGuess() }
				else { props.OnIncorrectGuess() }
			}
		}
	>
		_
	</div>
)