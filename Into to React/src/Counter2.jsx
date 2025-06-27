import { useState } from "react";

export default function Counter2() {
	const [counter, setCounter] = useState(0);

	function increase() {
		setCounter(counter + 1);
	}

	function decrease() {
		setCounter(counter - 1);
	}
	return (
		<div>
			Counter is: {counter}
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
		</div>
	);
}
