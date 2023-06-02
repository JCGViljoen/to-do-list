const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const sortButton = document.getElementById("sort-btn");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", addTodo);
sortButton.addEventListener("click", sortTodoList);

// Enter btn
todoInput.addEventListener("keypress", function(event) {
  if (event.keyCode === 13) {
    addTodo();
  }
});

//add btn
function addTodo() {
  let task = todoInput.value;

  if (task.trim()) {
    let li = document.createElement("li");
    li.textContent = task;

    // delete btn
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", deleteTodo);
    li.appendChild(deleteButton);

    todoList.appendChild(li);

    //clear
    todoInput.value = "";
  }
}

//delete a todo
function deleteTodo() {
  let listItem = this.parentNode;
  todoList.removeChild(listItem);
}

//sort btn
function sortTodoList() {
  let listItems = Array.from(todoList.getElementsByTagName("li"));

  listItems.sort(function(a, b) {
    let taskA = a.textContent.toLowerCase();
    let taskB = b.textContent.toLowerCase();

    if (taskA < taskB) {
      return -1;
    } else if (taskA > taskB) {
      return 1;
    } else {
      return 0;
    }
  });

  for (let i = 0; i < listItems.length; i++) {
    todoList.appendChild(listItems[i]);
  }
}

