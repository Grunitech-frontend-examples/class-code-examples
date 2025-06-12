import Animal from "./Animal.js";

export default class Bird extends Animal {
	constructor({ numberOfLegs, name, color }) {
		super(numberOfLegs, name);
		this.color = color;
	}

	makeSound() {
		console.log("Chirp!");
	}
}
