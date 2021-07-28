const todoForm = document.querySelector(".container_todoForm");
const todoInput = document.querySelector("#container_todoForm_todoInput");
const todolist = document.querySelector(".container_todolist");
const TODOS_KEY = "todos";

let todo_array = [];

// 1. save 버튼을 누르면 화면에 새로운 메세지가 나온다
function onSubmitForm(event) {
  event.preventDefault();
  console.log("New todo is submitted: " + todoInput.value);

  printtodo();
}

// 2. todoInput.value 를 화면에 띄운다.
function printtodo() {
  let todo_box = document.createElement("div");
  todo_box.classList.add("todo_box");
  let todo_main = document.createElement("span");
  todo_main.innerHTML = todoInput.value;
  let todo_cancel = document.createElement("button");
  todo_cancel.innerHTML = "X";
  todo_cancel.addEventListener("click", deleteTodo);

  todo_box.appendChild(todo_main);
  todo_box.appendChild(todo_cancel);
  todolist.appendChild(todo_box);
}

// 3. X 버튼을 누르면 todo 를 화면에서 삭제한다
function deleteTodo(event) {
  const clickedTodo = event.target.parentNode;
  console.dir(event.target.parentNode);

  clickedTodo.remove();
}

todoForm.addEventListener("submit", onSubmitForm);
/*
  1. 로컬 스토리지에서 todo list 를 불러온다
  2. 불러온 todo list 를 화면에 표시한다
  3. save 버튼을 누르면 todo list 가 화면에 업데이트된다
   - todos 배열이 업데이트 된다
   - 로컬 스토리지에 업데이트 된다
  4. 삭제 버튼을 누르면, 해당 todo list 가 삭제된다
 */
