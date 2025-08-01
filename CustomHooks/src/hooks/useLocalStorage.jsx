import { useState, useEffect } from "react";

export default function useLocalStorage(key) {
	const [value, setValue] = useState(() => localStorage.getItem(key) || 0);

	useEffect(() => {
		localStorage.setItem(key, value);
	}, [key, value]);

	return [value, setValue];
}
