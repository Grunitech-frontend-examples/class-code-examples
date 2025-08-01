import { useReducer } from "react";

function reducerFunction(state, action) {
	console.log("action", action);
	console.log("before change", state);
	switch (action) {
		case "increment":
			return { count: state.count + 1 };
		case "decrement":
			return { count: state.count - 1 };
		case "reset":
			return { count: 0 };
		default:
			return state;
	}
}

export default function Counter() {
	const initialState = { count: 0 };
	const [state, dispatch] = useReducer(reducerFunction, initialState);
	console.log("after change", state);
	return (
		<>
			<h3>{state.count}</h3>
			<button onClick={() => dispatch("increment")}>Increment</button>
			<button onClick={() => dispatch("decrement")}>Decrement</button>
			<button onClick={() => dispatch("reset")}>Reset</button>
		</>
	);
}
