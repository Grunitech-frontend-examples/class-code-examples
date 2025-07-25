import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

export default function ThemeBox() {
	const themeContext = useContext(ThemeContext);

	const color = themeContext.theme == "dark" ? "black" : "grey";

	return <div style={{ width: "200px", height: "200px", backgroundColor: color }}></div>;
}
