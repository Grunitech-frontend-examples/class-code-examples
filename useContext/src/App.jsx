import { useContext } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import ThemeBox from "./ThemeBox";

function App() {
	const themeContext = useContext(ThemeContext);

	console.log("themeContext", themeContext);

	function toggleTheme() {
		if (themeContext.theme == "light") {
			themeContext.setTheme("dark");
		} else {
			themeContext.setTheme("light");
		}
	}

	return (
		<>
			<button onClick={toggleTheme}>Toggle Theme</button>

			<ThemeBox />
		</>
	);
}

export default App;
