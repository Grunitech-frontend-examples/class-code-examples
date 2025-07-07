import { useState } from "react";

export default function Exc() {
	const [selectOption, setSelectedOption] = useState(null);

	function renderForm() {
		return (
			<div>
				<input type="text" />
			</div>
		);
	}
	function renderBox() {
		return <div className="red-box">Box</div>;
	}
	function renderText() {
		return <div>Text</div>;
	}

	return (
		<div>
			<button onClick={() => setSelectedOption("form")}>Form</button>
			<button onClick={() => setSelectedOption("box")}>Box</button>
			<button onClick={() => setSelectedOption("text")}>Text</button>

			{selectOption === "form" && renderForm()}
			{selectOption === "box" && renderBox()}
			{selectOption === "text" && renderText()}
		</div>
	);
}
