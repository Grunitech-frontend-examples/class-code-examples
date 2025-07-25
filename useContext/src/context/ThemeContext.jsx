import { createContext, useState } from "react";

const ThemeContext = createContext();
export default ThemeContext;

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState("light");

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}
