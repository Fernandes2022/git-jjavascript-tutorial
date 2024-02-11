
const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22',
  time: '02:45 PM'
} , {
  name: 'wash dishes',
  dueDate: '2022-12-22',
  time: '03:30 PM'
}];

renderTodo();

function renderTodo() {
let todoListCode = '';

for (let i = 0; i < todoList.length; i++) {
  const todoObject = todoList[i];
  // const name = todoObject.name;
  // const dueDate = todoObject.dueDate;
  const {name, dueDate, time} = todoObject;
  const code = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <div>${time}</div>  
  <button onclick="
  todoList.splice(${i}, 1);
  renderTodo();
  saveToStorage();
  " class="delete-button">Delete</button>
  `;
  todoListCode += code;
}
console.log(todoListCode);
document.querySelector('.js-todo-list').innerHTML = todoListCode;
  
}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
const name = inputElement.value;

const dateInputElement = document.querySelector('.js-due-date-input');
const dueDate = dateInputElement.value;

const jsTime = document.querySelector('.js-time');
const time = jsTime.value;

todoList.push({
// name: name,
// dueDate: dueDate
name, dueDate, time});
console.log(todoList);

inputElement.value = '';
 
renderTodo();
saveToStorage();
}
function saveToStorage(){
  localStorage.setItem('todoList', JSON.stringify(todoList));
}