import { useState } from "react";

export default function App() {
	const [selectedItems, setSelectedItems] = useState([true, false, false]);

	function changeCheckbox(index) {
		console.log("index", index);
		selectedItems[index] = !selectedItems[index];
		setSelectedItems([...selectedItems]);
	}

	return (
		<>
			<div style={{ marginLeft: "50px" }}>
				<ListItem isSelected={selectedItems[0]} title="aaaa" index={0} setSelected={changeCheckbox} />
			</div>
		</>
	);
}

function ListItem({ isSelected, title, index, setSelected }) {
	return (
		<div>
			{title}
			<input type="checkbox" checked={isSelected} onChange={() => setSelected(index)} />
		</div>
	);
}
