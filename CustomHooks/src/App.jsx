import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
	const [storageItem, setStorageItem] = useLocalStorage("test123");

	console.log("storageItem", storageItem);

	return (
		<>
			<button onClick={() => setStorageItem(Number(storageItem) + 1)}>Change</button>
			<h3>{storageItem}</h3>
		</>
	);
}

export default App;
