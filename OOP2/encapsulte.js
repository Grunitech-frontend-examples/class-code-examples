class CommsProvider {
	userName = "Somename";

	sendMessage(subject, message) {
		this.replaceName(subject);
		console.log("Send comms", subject, message);
	}

	replaceName(subject) {
		subject.replace("{{name}}", this.userName);
	}
}

class EmailProvider {
	#apiKey = "kjashd8723i4uhweiufx";
	#_senderName = "Shay";

	static counter = 0;

	constructor() {
		EmailProvider.counter++;
	}

	set senderName(value) {
		if (value.length < 2) throw "Too short";

		this.#_senderName = value;
	}
	get senderName() {
		return "from getter " + this.#_senderName;
	}

	sendMessage(subject, message) {
		console.log("Send email", subject, message);
	}

	#connectToServer() {}
}

class SmsProvider {
	sendMessage(subject, message) {
		console.log("Send SMS", subject, message);
	}
}

const provider = new EmailProvider();
new EmailProvider();
new EmailProvider();
new EmailProvider();
new EmailProvider();

console.log("EmailProvider.counter", EmailProvider.counter);
provider.senderName = "A";
console.log("sender name", provider.senderName);

console.log("sender name", provider.senderName);
// const provider = new SmsProvider();
// provider.sendMessage("This is the subject", "This is the message");

// const usersComs = [new SmsProvider(), new EmailProvider(), new EmailProvider(), new SmsProvider()];

// for (let user of usersComs) {
// 	user.sendMessage("Title", "Message");
// }
