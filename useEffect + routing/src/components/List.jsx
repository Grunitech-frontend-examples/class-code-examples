import { useEffect } from "react";

export default function List() {
	useEffect(() => {
		console.log("List mounted");
	}, []);
	return <div>list</div>;
}
