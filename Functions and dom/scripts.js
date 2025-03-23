// function buildCone(icecream, numberOfFlavs = 2) {
// 	const flavours = ["Vanilla", "Banana", "Mastika"];
// 	const clonedObject = { ...icecream };

// 	for (let i = 0; i < numberOfFlavs; i++) {
// 		if (i >= flavours.length) {
// 			console.warn("Number of flavs must not be more than whatever");
// 			break;
// 		}
// 		clonedObject[`flav${i}`] = flavours[i];
// 	}

// 	return clonedObject;
// }

// let cone1 = {};
// console.log(cone1);
// console.log(cone1);
// console.log(buildCone(cone1));
// cone1 = buildCone(cone1, 3);
// console.log(buildCone(cone1, 5));

// let number = 5;

// function primitiveFunc() {
// 	number += 3;

// 	return number;
// }

// primitiveFunc();
// console.log(number);

const element = document.getElementById("myElement");
// console.log(element);
// console.log("element.innerHTML", element.innerHTML);

// element.innerHTML = "<h1>This is my content!</h1><p>This is a paragraph</p>";

// console.log("element.innerHTML", element.innerHTML);

// const myImg = document.createElement("img");
// myImg.src = "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_avif,q_auto:eco,dpr_2/newscms/2020_43/3421887/201021-donald-trump-dance-ew-313p.jpg";

// myImg.style.width = "200px";
// console.log(myImg);

// const myH1 = document.createElement("h1");
// myH1.innerText = "Some title";

// element.prepend(myImg);
// element.append(myH1);

function changeElementColor(selector, addClass) {
	// const elements = document.getElementsByTagName(tagType);
	const elements = document.querySelectorAll(selector);

	for (let tag of elements) {
		console.log(tag.classList);
		tag.classList.add(addClass);
	}
}

// changeElementColor("a", "blue");
// changeElementColor(".red", "green");
changeElementColor(".container .someClass", "purple");
