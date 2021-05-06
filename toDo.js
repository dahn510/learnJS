const todoForm = document.querySelector(".js-toDoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");
// Local storage name
const TODO_LS = "todos"
let todoBasket = [];

// #I wish I could find better way to empty the list in HTML
// 		but I'm not that concerned about it.... yet....
function resetTodoList(list)
{
	list.innerHTML = '';
}

function deleteTodo(event, list)
{
	//remove given todo in HTML
	const btn = event.target;
	const li = btn.parentNode;
	list.removeChild(li);
	//reflect the same change to todo array
	const cleanArr = todoBasket.filter(function(element){
		return element.id !== parseInt(li.id);
	});
	todoBasket = cleanArr;
	//save the change to Local Storage
	persistTodo(todoBasket);
}

// Takes array and <ul> HTML element
// Empty the <ul> element and print each ToDoObjs to the element
function printTodo(basket, list)
{
	if(basket.length <= 0){
		console.log("to do basket is empty, getting from local storage.");
		getAllTodo();
	}
	for(element of todoBasket)
	{
		const li = document.createElement("li");
		const delBtn = document.createElement("button");
		const span = document.createElement("span");
		delBtn.innerText= "x";
		delBtn.addEventListener("click", function(event){
			deleteTodo(event, list, basket);
		});
		span.innerText = element.description;
		li.appendChild(span);
		li.appendChild(delBtn);
		li.id = element.id;
		list.appendChild(li);
	}
}

// loads todo objects from Local Storage into passed array
function getAllTodo()
{
	const loadTodos = localStorage.getItem(TODO_LS);
	todoBasket = JSON.parse(loadTodos);
}

//	Takes a string and an array
// 	make todo object and appends it to the array
function addTodo(text, basket)
{
	let ToDoObj = 
		{
			description: text, id: basket.length
		};
	basket.push(ToDoObj);
}

// Takes an array of ToDoObjs
// saves it to Local Storage as JSON file
function persistTodo(basket)
{
	console.log(basket);
	localStorage.setItem(TODO_LS, JSON.stringify(basket));
}

// Called when the user submits todo
// adds the todo into HTML
// adds the todo into todoBasket(array)
// saves the basket to Local Storage
function handleTodoSubmit(event)
{
	event.preventDefault();
	const thisInput = todoInput.value;
	addTodo(thisInput, todoBasket);
	persistTodo(todoBasket);
	resetTodoList(todoList);
	printTodo(todoBasket, todoList);
	todoInput.value="";
}


function init()
{
	getAllTodo();
	resetTodoList(todoList);
	printTodo(todoBasket, todoList);
	todoForm.addEventListener("submit", handleTodoSubmit);
}

init();
