import { useReducer } from "react";

function reducerFunction(state, action) {
	console.log("state", state);
	console.log("action", action);
	switch (action.type) {
		case "signin":
			localStorage.setItem("myState", JSON.stringify({ userName: action.payload.name, userId: action.payload.id }));
			return { userName: action.payload.name, userId: action.payload.id };
		case "signout":
			localStorage.clear();
			return { userName: null, userId: null };
		default:
			return state;
	}
}

function getInitialState() {
	let state = localStorage.getItem("myState");
	if (state) return JSON.parse(state);
	return { userName: null, userId: null };
}

export default function Counter() {
	const [state, dispatch] = useReducer(reducerFunction, getInitialState());

	function signIn() {
		dispatch({ type: "signin", payload: { name: "text", id: "1234" } });
	}

	return (
		<>
			<h3>
				Current User: {state.userName} - {state.userId}
			</h3>
			<button onClick={signIn}>Sign In</button>
			<button onClick={() => dispatch({ type: "signout" })}>Sign Out</button>
		</>
	);
}
