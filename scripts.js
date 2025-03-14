// let valueA = 1234;
// let valueB = "1234";
// let valueC = 9234;

// if (valueA > valueC) {
// 	console.log("valueA > valueC");
// } else if (valueB == "1234") {
// 	console.log("valueB == 1234");
// } else {
// 	console.log("valueA <= valueC");
// }

// valueA == 1234 ? console.log("true") : console.log("false");

// if (valueA == 1234) console.log("true");
// else console.log("false");

// const myArray = [];

// myArray.push("b");
// myArray.push("c");
// myArray.unshift("a");

// console.log(myArray);
// let lastItem = myArray.pop();

// console.log("lastItem", lastItem);
// console.log(myArray);
// myArray.shift();
// console.log(myArray);

// let myObject = {
// 	key1: "value",
// 	key2: "valu2",
// 	"1sad": "adasd",
// };

// myObject["kasjdh"] = "asdasd";

// // delete myObject["kasjdh"];

// console.log(myObject);

// console.log(myObject["key1"]);
// console.log(myObject.key1);

/**
 *
 * For loops types
 *
 */

// const myArray = ["a", "b", "c", "d", "e"];

// for (let i = myArray.length - 1; i >= 0; i--) {
// 	console.log(`Index ${i} = ${myArray[i]}`);
// }

// for (let value of myArray) {
// 	console.log(`value ${value}`);
// }
// for (let index in myArray) {
// 	// if (index > 1) break;
// 	if (index == 2) continue;

// 	const value = myArray[index];
// 	console.log(value);
// }
// console.log("After loop");

/**
 *
 * 2 Dimentional array loop (matrix)
 *
 */

// const customersProducts = [
// 	["prod1", "prod2", "prod3"], //user1
// 	["prod3", "prod2", "prod7"], //user2
// 	["prod14", "prod24", "prod2"], //user3
// ];

// for (let customerIndex in customersProducts) {
// 	console.log(`customer ${parseInt(customerIndex) + 1}`);
// 	const customer = customersProducts[customerIndex];
// 	for (let product of customer) {
// 		console.log("Product", product);
// 	}
// }

/**
 *
 * Loops Exersice
 *
 */

const myArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

for (let index in myArray) {
	const value = myArray[index];
	console.log(value);
}

// for (let i = 0; i < myArray.length; i++) {
// 	const reserveI = myArray.length - 1 - i;
// 	console.log("index" + reserveI, myArray[reserveI]);
// }

// for (let i = myArray.length - 1; i >= 0; i--) {
// 	console.log("index" + i, myArray[i]);
// }

// for (let i = myArray.length - 1; i >= 0; i -= 2) {
// 	// if (i % 2 == 0) continue;
// 	// if (i == 8 || i == 6) continue;
// 	console.log("index" + i, myArray[i]);
// }

// for (let i = 0; i < myArray.length; i += 2) {
// 	console.log("index" + i, myArray[i]);
// }
