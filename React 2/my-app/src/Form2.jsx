import { useState } from "react";

export default function Form2({ initFirstName, initLastName, initCity }) {
	const [firstName, setFirstName] = useState(initFirstName);
	const [lastName, setLastName] = useState(initLastName);
	const [city, setCity] = useState(initCity);
	const [isStudent, setIsStudent] = useState(false);

	return (
		<div>
			<button onClick={() => setCity("")}>Reset</button>
			<input type="text" placeholder="First name" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
			<br />
			<input type="text" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} value={lastName} />
			<br />
			<select value={city} onChange={(e) => setCity(e.target.value)}>
				<option value="" selected hidden>
					Choose
				</option>
				<option value="TLV">Tel Aviv</option>
				<option value="haifa">Haifa</option>
				<option value="eilat">Eilat</option>
			</select>
			<br />
			<input type="checkbox" checked={isStudent} onChange={(e) => setIsStudent(e.target.checked)} />

			<br />
			<br />
			<div>First name: {firstName}</div>
			<div>Last name: {lastName}</div>
			<div>City: {city} </div>
			<div>{isStudent && "Is student"}</div>
		</div>
	);
}
