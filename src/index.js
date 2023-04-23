document.addEventListener("DOMContentLoaded", () => {
  // your code here


const form = document.getElementsByTagName('form')[0];
const newTaskInput = document.getElementsByTagName('input')[0];
const taskList = document.getElementById('tasks');


form.addEventListener('submit', function(event) {

  event.preventDefault();

  const newTask = newTaskInput.value;

  const listItem = document.createElement('li');

  listItem.innerText = newTask;

  taskList.appendChild(listItem);

});

});
