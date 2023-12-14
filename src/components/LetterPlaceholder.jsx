import React from "react"

export default React.forwardRef(
	(props, ref) =>
	<div
		ref={ref}
		style={{ fontSize : "4rem", display : "inline", padding : "1rem" }}
		data-target-letter={props.TargetLetter}
		onClick={
			(e) => {
				
				// If all letters are already solved, return
				if (props.AllLPs.every(lpRef => lpRef.current?.innerText !== "_")) { return }

				const inputLetter	= [...(window.prompt("Guess letter value...") || "_")].at(0).toUpperCase()

				const otherLPs_targetingInputLetter = props.AllLPs
					.filter(lpRef => lpRef !== ref)
					.filter(lpRef => lpRef.current?.getAttribute("data-target-letter") === inputLetter)
				
				if (inputLetter === props.TargetLetter) {
			
					// Show this LP's TargetLetter
					e.target.innerText = props.TargetLetter

				} else if (otherLPs_targetingInputLetter.length !== 0) {
					
					// At least 1 other LP has this TargetLetter; show its/their TargetLetter(s)
					otherLPs_targetingInputLetter.forEach(lpRef => lpRef.current.innerText = inputLetter)

				} else { props.OnIncorrectGuess() }
				
				// If all letters are now solved, show a msg
				props.AllLPs.every(lpRef => lpRef.current?.innerText !== "_") && window.alert("All solved!")
			
			}
		}
	>
		_
	</div>
)