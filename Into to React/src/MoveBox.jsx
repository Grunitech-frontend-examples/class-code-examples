import { useState } from "react";
import "./MoveBox.css";

function Box({ color, left }) {
	return <div className="box" style={{ backgroundColor: color, left: `${left}px` }}></div>;
}

const colors = ["red", "blue", "green"];

export default function MoveBox() {
	const [boxLeft, setBoxLeft] = useState(0);
	const [boxColor, setBoxColor] = useState(0);

	function moveRight() {
		setBoxLeft(boxLeft + 50);
		if (boxColor == colors.length - 1) setBoxColor(0);
		else setBoxColor(boxColor + 1);
	}
	function moveLeft() {
		setBoxLeft(boxLeft - 50);

		if (boxColor == 0) setBoxColor(colors.length - 1);
		else setBoxColor(boxColor - 1);
	}

	return (
		<div>
			<button onClick={moveLeft}>Move left</button>
			<button onClick={moveRight}>Move right</button>

			<Box left={boxLeft} color={colors[boxColor]} />
		</div>
	);
}
