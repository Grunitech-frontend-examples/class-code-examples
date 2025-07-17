import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Feed from "./components/Feed";
import "./index.css";
import { useEffect, useState } from "react";

export default function App() {
	const [counter, setCounter] = useState(0);
	useEffect(() => {
		console.log("useEffect");
		return () => {
			console.log("Cleanup");
		};
	}, [counter]);

	return (
		<>
			<button onClick={() => setCounter(counter + 1)}>Add</button>
			<BrowserRouter>
				<NavLink to="">Home</NavLink>|<NavLink to="about">About</NavLink>|<NavLink to="feed">Feed</NavLink>
				<NavLink to="asdasd">asd</NavLink>
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="feed" element={<Feed />} />
					<Route path="*" element={<h1>404</h1>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
