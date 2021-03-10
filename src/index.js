document.addEventListener("DOMContentLoaded", () => {
  let itemCounter = 0
  document.addEventListener("submit", (e) => {
    e.preventDefault();
    let task = document.getElementById('new-task-description');
    let taskList = document.getElementById('tasks');
    let newTask = document.createElement('li');
    let newButton = document.createElement('button');
    newButton.innerText = "X"
    newButton.addEventListener('click', () => {
      newButton.parentNode.remove();
    })
    newTask.innerText = task.value;
    newTask.appendChild(newButton);
    console.log(newButton.parentNode);
    taskList.appendChild(newTask);
  });


});
