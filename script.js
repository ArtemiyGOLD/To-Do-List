let taskCount = 0;

function addTask() {
    let taskList = document.getElementById('taskList');
    let input = document.getElementById('taskInput');
    let text = input.value.trim();

    if (!text) {
        alert('Задача пустая!');
        return;
    }

    let newLi = document.createElement('li');

    let taskNumber = document.createElement('span');
    taskNumber.style.fontWeight = 'bold';
    taskNumber.style.marginRight = '10px';
    taskNumber.style.color = '#667eea';
    taskNumber.textContent = (taskList.children.length + 1) + '.';

    let taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = text;

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Удалить';
    deleteBtn.onclick = function () {
        newLi.remove();
        renumberTasks();
    };

    newLi.appendChild(taskNumber);
    newLi.appendChild(taskText);
    newLi.appendChild(deleteBtn);
    taskList.appendChild(newLi);

    input.value = '';

}

function renumberTasks() {
    let tasks = document.querySelectorAll('#taskList li');
    tasks.forEach((task, index) => {
        task.querySelector('span:first-child').textContent = (index + 1) + '.';
    });
}

function clearCompleted() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

}