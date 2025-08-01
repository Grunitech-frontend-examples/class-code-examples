import { useReducer } from "react";
import "./MoveBox.css";

function reducerFunction(state, action) {
	switch (action) {
		case "up":
			return { ...state, top: state.top - 10 };
		case "down":
			return { ...state, top: state.top + 10 };
		case "left":
			return { ...state, left: state.left - 10 };
		case "right":
			return { ...state, left: state.left + 10 };
	}
}

export default function MoveBox() {
	const [state, dispatch] = useReducer(reducerFunction, { left: 0, top: 0 });

	console.log("state", state);

	return (
		<>
			<button onClick={() => dispatch("up")}>Up</button>
			<button onClick={() => dispatch("down")}>Down</button>
			<button onClick={() => dispatch("left")}>Left</button>
			<button onClick={() => dispatch("right")}>Right</button>
			<div className="box-container">
				<div className="box" style={{ top: `${state.top}px`, left: `${state.left}px` }}></div>
			</div>
		</>
	);
}
