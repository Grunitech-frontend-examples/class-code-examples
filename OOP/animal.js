export default class Animal {
	constructor(numberOfLegs, name) {
		this.numberOfLegs = numberOfLegs;
		this.name = name;
	}

	makeSound() {
		console.log("Generic sound");
	}
}
