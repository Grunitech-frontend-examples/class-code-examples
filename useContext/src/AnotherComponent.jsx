import ModalContext from "./context/ModalContext";
import { useContext } from "react";

export default function AComponentThatOpensModal() {
	const { setOpenModal } = useContext(ModalContext);

	return (
		<>
			<div>
				<button onClick={() => setOpenModal(true)}>Open Modal</button>
			</div>
		</>
	);
}
