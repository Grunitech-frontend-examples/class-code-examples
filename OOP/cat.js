// class Car {
// 	constructor(make, model, year, topSpeed, numberOfWheels = 4) {
// 		console.log("construct", make, model, year);
// 		this.make = make;
// 		this.model = model;
// 		this.year = year;
// 		this.topSpeed = topSpeed;
// 		this.numberOdWheels = numberOfWheels;
// 	}

// 	driveFast() {
// 		console.log("Currently driving at " + this.topSpeed);
// 	}
// }

// const car1 = new Car("lamburgini", "matador", 2026, 300);
// const car2 = new Car("porsche", "911", 2026, 280);

// Create a new class called “Student” with the properties: first name, last name, birth date, grade and studyTopic.

// Add a method called “introduce” that prints the student’s details as a string in the following format: “{firstName} {lastName} was born in {birthdate}”

// Add a method to calculate the age (return a number representing the age)

class Person {
	constructor(firstName, lastName, birthdate) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthdate = new Date(birthdate);
	}

	introduce() {
		console.log(`${this.firstName} ${this.lastName} was born in ${this.birthdate}`);
	}

	getAge() {
		const currentDate = new Date();
		const currentTimestamp = currentDate.getTime();

		const birthdateTime = this.birthdate.getTime();
		const delta = currentTimestamp - birthdateTime;
		const yearInMili = 1000 * 60 * 60 * 24 * 365.25;

		return Math.floor(delta / yearInMili);

		// const currentYear = currentDate.getFullYear();
		// const birthYear = this.birthdate.getFullYear();

		// return currentYear - birthYear;
	}
}

class Student extends Person {
	static count = 0;

	constructor(firstName, lastName, birthdate, grade, studyTopic) {
		super(firstName, lastName, birthdate);
		this.grade = grade;
		this.studyTopic = studyTopic;

		Student.count++;
	}

	static showCount() {
		console.log(`${Student.count} students were created`);
	}
}

class Teacher extends Person {
	constructor(firstName, lastName, birthdate, profession, seniority) {
		super(firstName, lastName, birthdate);
		this.profession = profession;
		this.seniority = seniority;
	}
}

const student = new Student("Israel", "sraeli", "1990-06-05", 5, "Frontend");
student.introduce();
console.log("age", student.getAge());
