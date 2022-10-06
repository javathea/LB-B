function createCell(text) {
    const cell = document.createElement("td");
    cell.innerText = text;
    return cell;
}

function renderTasks(tasks) {
    const tableBody = document.querySelector("tbody")
    tasks.forEach((task) => {
        const tableRow = document.createElement("tr")
        tableRow.append(
            createCell(task.id), 
            createCell(task.completed), 
            createCell(task.title)
            )
        tableBody.appendChild(tableRow);
    });
};

function indexTask() {
    fetch("http://localhost:3000/tasks")
    .then((response) => response.json())
    .then((data) => {
        taskData = data;
        return renderTasks(taskData);
    })
};

function createTask(task) {
    fetch("http://localhost:3000/tasks", {
        method: `POST`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
        }) .then()
}

document.addEventListener("DOMContentLoaded", () => {
    indexTask();
    createTask();
    const taskForm = document.getElementById("taskForm");
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
    })
});
