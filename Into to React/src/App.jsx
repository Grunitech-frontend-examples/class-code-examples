import MoveBox from "./MoveBox";
import "./App.css";

const foods = [
	{
		name: "Pizza",
		rating: 5,
		image: "https://uk.ooni.com/cdn/shop/articles/20220211142645-margherita-9920_e41233d5-dcec-461c-b07e-03245f031dfe.jpg?v=1737105431&width=2048",
	},
	{
		name: "Hamburger",
		rating: 4.5,
		image: "https://www.allrecipes.com/thmb/Hmni1cu_75Co5MsZp2b5rcWN5ms=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/AR-72657-best-hamburger-ever-ddmfs-4x3-hero-878e801ab30445988d007461782b3c25.jpg",
	},
];

export default function App() {
	// function renderFoodList() {
	// 	return foods.map((foodItem) => {
	// 		return <Food name={foodItem.name} rating={foodItem.rating} image={foodItem.image} />;
	// 	});
	// }

	// return <div className="main-container">{renderFoodList()}</div>;

	return (
		<div>
			<MoveBox />
		</div>
	);
}
