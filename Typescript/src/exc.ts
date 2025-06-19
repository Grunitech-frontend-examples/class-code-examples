function countChars(string: string): number {
	return string.length;
}

function multiply(number: number): number {
	const multiplyBy = Math.round(Math.random() * 1000);
	console.log(`multiply ${number} by ${multiplyBy}`);
	return multiplyBy * number;
}

function runLogic(input: string | number): number {
	if (typeof input === "number") {
		return multiply(input);
	}

	return multiply(countChars(input));
}

function runLogic2(input: string | number): number {
	if (typeof input === "string") {
		input = countChars(input);
	}

	return multiply(input);
}

console.log(runLogic("Hello there!"));
console.log(runLogic2(100));
