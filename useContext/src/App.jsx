import { useContext } from "react";
import "./App.css";
import ThemeContext from "./context/ThemeContext";
import ThemeBox from "./ThemeBox";
import ModalContext from "./context/ModalContext";
import AComponentThatOpensModal from "./AnotherComponent";
import CounterReducer from "./reducers/CounterReducer";
import MoveBox from "./MoveBox";

function App() {
	const themeContext = useContext(ThemeContext);
	const { openModal, setOpenModal } = useContext(ModalContext);

	console.log(openModal);
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
			<MoveBox />
			{/* <button onClick={toggleTheme}>Toggle Theme</button>
			<AComponentThatOpensModal />

			<ThemeBox />

			{openModal && (
				<div className="modal-backdrop">
					<div className="container">
						<button onClick={() => setOpenModal(false)}>Close</button>
					</div>
				</div>
			)}*/}
		</>
	);
}

export default App;
