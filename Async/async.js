// // function promiseFunc(resolve, reject) {
// // 	setTimeout(() => {
// // 		reject("success!");
// // 	}, 3000);
// // }
// // const myPromise = new Promise(promiseFunc);

// // console.log(myPromise);

// // myPromise
// // 	.then((result) => {
// // 		console.log("result", result);
// // 	})
// // 	.catch((err) => {
// // 		console.log("err", err);
// // 	});

// // console.log("after then");

// // const JSONstring = `{
// //   "Title": "The Lord of the Rings: The Fellowship of the Ring",
// //   "Year": "2001",
// //   "Rated": "PG-13",
// //   "Released": "19 Dec 2001",
// //   "Runtime": "178 min",
// //   "Genre": "Adventure, Drama, Fantasy",
// //   "Director": "Peter Jackson",
// //   "Writer": "J.R.R. Tolkien, Fran Walsh, Philippa Boyens",
// //   "Actors": "Elijah Wood, Ian McKellen, Orlando Bloom",
// //   "Plot": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
// //   "Language": "English, Sindarin",
// //   "Country": "New Zealand, United States, United Kingdom",
// //   "Awards": "Won 4 Oscars. 125 wins & 126 nominations total",
// //   "Poster": "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg",
// //   "Ratings": [
// //     {
// //       "Source": "Internet Movie Database",
// //       "Value": "8.9/10"
// //     },
// //     {
// //       "Source": "Rotten Tomatoes",
// //       "Value": "92%"
// //     },
// //     {
// //       "Source": "Metacritic",
// //       "Value": "92/100"
// //     }
// //   ],
// //   "Metascore": "92",
// //   "imdbRating": "8.9",
// //   "imdbVotes": "2,091,490",
// //   "imdbID": "tt0120737",
// //   "Type": "movie",
// //   "DVD": "N/A",
// //   "BoxOffice": "$319,372,078",
// //   "Production": "N/A",
// //   "Website": "N/A",
// //   "Response": "True"
// // }`;

// // const jsonObject = JSON.parse(JSONstring);

// // console.log(jsonObject);
// // console.log(JSON.stringify(jsonObject));
// const movieName = "matrix";

// async function _getList(str) {
// 	const fetchData = fetch("https://www.omdbapi.com/?apiKey=94e1e8f6&s=" + str);
// 	return fetchData
// 		.then((response) => {
// 			console.log("response", response);
// 			const jsonData = response.json().then((result) => {
// 				console.log("json.data", result);
// 				return result;
// 			});
// 			console.log("jsonData", jsonData);
// 			return jsonData;
// 		})
// 		.catch((e) => {
// 			console.log("error", e);
// 		});
// }

async function getList(str) {
	const fetchData = await fetch("https://www.omdbapi.com/?apiKey=94e1e8f6&s=" + str);
	console.log(fetchData);
	const jsonData = await fetchData.json();
	console.log(jsonData.Search);
	return jsonData.Search;
}

// let movieList;
// getList("matrix").then((data) => {
// 	console.log("data", data);
// });

async function asyncFUnc() {
	return 3;
}

console.log(asyncFUnc());

asyncFUnc().then((result) => {
	console.log(result);
});
