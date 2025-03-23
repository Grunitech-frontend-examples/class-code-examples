// // let counter = 0;

// // function showAlert() {
// // 	alert("I am an alert!");
// // 	counter++;
// // 	console.log("counter", counter);
// // }

// // const buttons = document.querySelectorAll(".clickableBtn");

// // for (let btn of buttons) {
// // 	btn.addEventListener("click", showAlert);
// // }

// // document.querySelector(".unnamed").addEventListener("click", function (event) {
// // 	console.log("Clicked unnamed", event);
// // });

// // document.getElementById("numbers-only").addEventListener("keyup", function (event) {
// // 	console.log(event.target.value);
// // 	event.target.value = parseInt(event.target.value);
// // 	console.log(event.target.value);

// // 	if (event.target.value == "NaN") event.target.value = "";
// // });

// const timeout = setTimeout(function () {
// 	console.log("Call timeout");
// }, 5000);

// document.getElementById("somebtn").addEventListener("click", killTimeout);

// let counter = 0;

// const interval = setInterval(function () {
// 	counter++;
// 	console.log("After 5 seconds", counter);

// 	if (counter > 10) clearInterval(interval);
// }, 5000);

// function killTimeout() {
// 	console.log("killTimeout");
// 	clearTimeout(timeout);
// 	clearInterval(interval);
// }
