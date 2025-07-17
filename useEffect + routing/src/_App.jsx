import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	// const [data, setFact] = useState("");

	// async function getFact() {
	// 	const response = await fetch("https://catfact.ninja/fact");
	// 	const result = await response.json();
	// 	return result;
	// }

	// useEffect(() => {
	// 	getFact().then((result) => {
	// 		setFact(result.fact);
	// 		setIsLoading(false);
	// 	});
	// }, []);

	const [facts, setFacts] = useState([]);
	const [limit, setLimit] = useState(0);
	const [isFirstLaunch, setIsFirstLaunch] = useState(true);

	async function getFacts(factLimit) {
		// if (factLimit == 0) return;
		const response = await fetch(`https://catfact.ninja/facts?limit=${factLimit}`);
		const result = await response.json();
		console.log("result", result);
		return result;
	}

	useEffect(() => {
		if (limit === 0) return;
		setIsLoading(true);
		getFacts(limit).then((data) => {
			const stringArray = data.data.map((item) => item.fact);
			setFacts([...facts, stringArray]);
			setIsLoading(false);
			setIsFirstLaunch(false);
		});
	}, [limit]);

	return (
		<>
			<input type="number" value={limit} onChange={(e) => setLimit(e.target.value)} />
			{isLoading && !isFirstLaunch && "Loading..."}
			{isLoading && isFirstLaunch && "Enter a number"}
			{facts.map((fact, index) => {
				return <p key={index}>{fact}</p>;
			})}
		</>
	);
}

export default App;
