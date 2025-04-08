const loadingElem = document.querySelector(".loading");
const listContainer = document.getElementById("todo-list");
const errorContainer = document.getElementById("error-container");

document.getElementById("submit").addEventListener("click", sendTodo);

function toggleLoading(showLoader) {
	if (showLoader) {
		loadingElem.classList.remove("hidden");
	} else {
		loadingElem.classList.add("hidden");
	}
}

async function sendTodo() {
	showError(false);
	toggleLoading(true);
	try {
		const description = document.getElementById("description").value;
		const status = document.getElementById("status").value;
		const userId = document.getElementById("user-id").value;

		const payload = {
			todo: description,
			completed: status == "1" ? true : false,
			userId: parseInt(userId),
		};

		const response = await fetch("https://dummyjson.com/todos/add", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(payload),
		});

		if (!response.ok) {
			throw new Error("Request was not OK");
		}
	} catch (e) {
		showError(e.message);
	} finally {
		toggleLoading(false);
	}
}

async function fetchTodos() {
	showError(false);
	toggleLoading(true);
	try {
		const skip = 0;
		const response = await fetch(`https://dummyjson.com/todos?skip=${skip}&limit=10`);

		if (!response.ok) {
			throw new Error("Request was not OK");
		}

		const data = await response.json();

		displayTodos(data.todos);
	} catch (e) {
		showError(e.message);
	} finally {
		toggleLoading(false);
	}
}

function showError(error) {
	errorContainer.innerHTML = "";
	if (error) {
		errorContainer.innerHTML = error;
	}
}

function displayTodos(todos) {
	// listContainer.innerHTML = "Hello there!";

	for (item of todos) {
		const li = document.createElement("li");
		li.textContent = item.todo;

		listContainer.appendChild(li);
	}
}

fetchTodos();
