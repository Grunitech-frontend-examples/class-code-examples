import { useState } from "react";

const letterRegex = /^[a-zA-Z]*$/;

export default function Form() {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [isChecked, setIsChecked] = useState(false);

	console.log("isChecked", isChecked);

	function updateUsername(value) {
		if (letterRegex.test(value)) {
			setUserName(value);
		}
	}

	function resetForm() {
		setUserName("");
		setPassword("");
		setIsChecked(false);
	}

	function submit() {
		if (!isChecked) {
			alert("Please check the checkbox");
			return;
		}
	}

	function isDisabled() {
		return userName.length < 2 || password.length < 2 || !isChecked;
	}

	return (
		<>
			<input type="text" onChange={(e) => updateUsername(e.target.value)} value={userName} />
			<br />
			<input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
			<br />
			<input type="checkbox" onChange={(e) => console.log(e.target.checked)} />
			<br />
			<button onClick={submit} disabled={isDisabled()}>
				Log in
			</button>
			<button onClick={resetForm}>Reset</button>
			<select value={"bbb"}>
				<option value="aaa">aaa</option>
				<option value="bbb">bbb</option>
				<option value="ccc">ccc</option>
			</select>
		</>
	);
}

// Build a form with the following fields:

// First name – text
// Last name – text
// City – drop down
// Is student – checkbox

// Under the form show the values as “title”:”value” and change it live
