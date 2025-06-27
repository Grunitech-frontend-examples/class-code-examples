export default function Food({ name, image, rating }) {
	return (
		<div className="food-item">
			<h2>{name}</h2>
			<img src={image} />
			<p>Rating: {rating}/5</p>
		</div>
	);
}

// export default function Food(props) {
// 	return (
// 		<div>
// 			<h2>{props.name}</h2>
// 			<img style={{ width: "100px" }} src={props.image} />
// 			<p>Rating: {props.rating}/5</p>
// 		</div>
// 	);
// }
