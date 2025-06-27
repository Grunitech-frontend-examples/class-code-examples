import { useState } from "react";

export default function CounterComponent() {
	const [counter, setCounter] = useState(0);
	const [user, setUser] = useState({ name: "David" });

	function increase() {
		setCounter(counter + 1);
	}

	function decrease() {
		setCounter(counter - 1);
	}

	function generateName() {
		const names = ["david", "moshe", "israel", "anna"];

		const tmpname = names[Math.floor(names.length * Math.random())];

		user.name = tmpname;
		setUser({ ...user });
	}

	return (
		<div>
			Counter: {counter}
			<br />
			<button onClick={increase}>Increase</button>
			<button onClick={decrease}>Decrease</button>
			<br />
			<br />
			{user.name}
			<button onClick={generateName}>Generate Name</button>
		</div>
	);
}
