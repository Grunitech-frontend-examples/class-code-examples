function aaa(str) {
	let newStr = "";
	for (let i = 0; i < str.length; i++) {
		if (str[i] == " ") {
			console.log(str[i + 1].toUpperCase());
			newStr += ` ${str[i + 1].toUpperCase()}`;
		} else {
			if (i === 0) newStr += str[i].toUpperCase();
			newStr += str[i];
		}
	}
	console.log(newStr);
}

aaa("asd asd asd");
