// function sum(number1, number2) {
// 	return number1 + number2;
// }

// sum(10, 5);
// sum(5, 5);

// document.getElementById("myelement").addEventListener("click", sum);

// document.getElementById("myelement").addEventListener("click", function () {
// 	console.log("Clicked");
// });

// document.getElementById("myelement").addEventListener("click", () => {
// 	console.log("Clicked");
// });

// document.getElementById("whatever").addEventListener("click", (event) => {
// 	console.log("Clicked the button", event.target);
// 	event.target.innerText = "I was clicked!";
// });

// aaa();

// function aaa() {
// 	console.log("AAA");
// }

// var letvar;

// console.log(letvar);

// letvar = "aaa";

// if (true) {
// 	let myVariable = "bla";
// }

// console.log(myVariable);

// const david = {
// 	name: "David Israeli",
// 	city: "Haifa",
// 	sayName: function () {
// 		console.log("this", this);
// 		// console.log("Hello my name is " + this.name);
// 	},
// };
// const israel = {
// 	name: "Israel Israeli",
// 	city: "Haifa",
// 	sayName: () => {
// 		console.log("this", this);
// 		// console.log("Hello my name is " + this.name);
// 	},
// };

// // david.sayName();
// // israel.sayName();

// document.getElementById("whatever").addEventListener("click", function () {
// 	console.log("this", this);
// });

// const myObject = {
// 	addListener: function () {
// 		document.getElementById("whatever").addEventListener("click", () => console.log("this", this));
// 	},
// 	timeout: function (aaa) {
// 		setTimeout(() => {
// 			console.log("this", this);
// 		}, aaa);
// 	},
// };

// // myObject.addListener();
// myObject.timeout(5000);

// Create an object with the following keys:

// - name
// - major
// - year
// - sumary

// summary should be a method printing the following:

// I am $name, studying $major in year $year

// do this using regular funciton, and then change to arrow function

// const list = {
// 	test: function () {
// 		const student = {
// 			name: "Shimshon",
// 			major: "Frontend",
// 			year: 2064,
// 			summary: () => {
// 				console.log(this);
// 				// console.log(`I am ${this.name}, studying ${this.major} in year ${this.year}`);
// 			},
// 		};

// 		student.summary();
// 	},
// };

// parent.test();

console.log("1");
console.log("2");
console.log("3");
setTimeout(() => {
	console.log("4");
}, 1);
console.log("5");
