// function Car(make, model, year) {
// 	this.Make = make;
// 	this.Model = model;
// 	this.Year = year;

// 	this.calculateAge = function () {
// 		return new Date().getFullYear - this.Year;
// 	};

// 	this.buildElement = function () {
// 		return `<div>
//             <h1>${this.Make} - ${this.Model}</h1>
//             <h3>${this.Year}</h3>
//             <h4>Buy now!</h4>
//         </div>`;
// 	};
// }

// const car1 = new Car("Toyota", "Corolla", 2025);
// const car2 = new Car("Ford", "Mustang", 2025);
// const car3 = new Car("Nisan", "Something", 2025);
// const car4 = new Car("Nisan", "Juke", 2025);

// const arr = [car1, car2, car3, car4];

// const container = document.getElementById("container");

// for (let car of arr) {
// 	container.innerHTML += car.buildElement();
// }

// const myObject = {
// 	prop1: 1,
// 	prop2: "2",

// 	printThis: () => {
// 		console.log("this", this);
// 	},
// };

// myObject.printThis();

// function Counter(initialCount) {
// 	this._counter = initialCount;

// 	this.increase = function () {
// 		this._counter++;
// 		console.log("Counter:", this._counter);
// 	};

// this.decrease = function (amount) {
// 	this._counter -= amount;
// 	console.log("Counter:", this._counter);
// };

// this.reset = function () {
// 	this._counter = initialCount;
// 	console.log("Counter:", this._counter);
// };
// }

// const counterInstance = new Counter(100);
// const counterInstance2 = new Counter(100);

// counterInstance.someMethod = function () {
// 	console.log("Hi!");
// };

// console.log("counterInstance", counterInstance);
// console.log("counterInstance2", counterInstance2);

// counterInstance.increase(10);
// counterInstance.someMethod(10);
// counter.decrease(2);
// counter.decrease(3);
// counter.reset();

/**
 *
 * Closures
 */

// const sumObject = {
//     firstNumber: 10,
//     add: function(secondNumber) {
//         return this.firstNumber + secondNumber
//     }
// }

// sumObject.firstNumber = 20

// function onlyOnce(fn) {
// 	let wasCalled = false;

// 	return function () {
// 		if (!wasCalled) {
// 			wasCalled = true;
// 			fn();
// 		}
// 	};
// }

// function makeTransaction() {
// 	console.log("Transaction made!");
// }
// function makeTransaction2() {
// 	console.log("Caller 2!");
// }

// const caller = onlyOnce(makeTransaction);
// const caller2 = onlyOnce(makeTransaction2);
// const caller3 = onlyOnce(makeTransaction2);

// caller();
// caller();
// caller();
// caller3();
// caller3();
// caller();
// caller();
// caller2();
// caller2();
// caller2();
// caller2();
// caller2();

function initCounter(initialCount) {
	function add() {
		initialCount++;
		console.log("initialCount", initialCount);
	}

	function reset() {
		initialCount = 0;
	}

	const returned = { add, reset };

	return returned;
}

const returnVal = initCounter(100);

returnVal.add();
returnVal.add();
returnVal.reset();
returnVal.add();
returnVal.add();
